import { Alert, DateTime } from '@core/adapters'
import { UnexpectedError } from '@core/errors'
import { AuthorizedTransit, LastTransit } from '@core/models'
import { env } from '@main/configs'
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder
} from '@microsoft/signalr'
import { InfoPanel, PageHeader, Panel, Table } from '@presentation/components'
import { InfoPanelProps } from '@presentation/components/types'
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { TableColumn } from 'react-data-table-component'
import { FaCar, FaEye } from 'react-icons/fa'
import { IoEnter, IoExit, IoHelp } from 'react-icons/io5'
import { DriverDetails, MessageStatus } from '../components'
import { TransitStatus, TransitType } from '../models'

const TransitoPage: React.FC = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null)
  const [authorizedTransit, setAuthorizedTransit] =
    useState<AuthorizedTransit>()
  const [transitStatus, setTransitStatus] = useState<TransitStatus>(
    TransitStatus.Wait
  )

  useEffect(() => {
    const transitConnection = new HubConnectionBuilder()
      .withUrl(`${env.hubs.transitoCatraca}`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build()

    setConnection(transitConnection)
  }, [])

  useEffect(() => {
    void handleConnection()
  }, [connection])

  const handleConnection = async () => {
    if (connection) {
      try {
        await connection.start()

        connection.on('AuthorizedTransit', (message: AuthorizedTransit) => {
          console.log(message)
          setAuthorizedTransit(message)
          setTransitStatus(TransitStatus.Authorized)
        })
      } catch (e) {
        const error = new UnexpectedError()
        Alert.callError({
          title: error.name,
          description: error.message
        })
      }
    }
  }

  const getVehicleInfoPanelParams = useCallback(() => {
    return {
      icon: FaCar,
      label: authorizedTransit?.vehicleCategory ?? 'Categoria',
      value: authorizedTransit
        ? `${authorizedTransit.vehiclePlate} | ${authorizedTransit.vehicleModel}`
        : 'Placa | Modelo'
    }
  }, [authorizedTransit])

  const getTransitTypeInfoPanelParams = useCallback((): InfoPanelProps => {
    if (authorizedTransit) {
      const isEntrance = authorizedTransit.transitType === TransitType.Entrance
      return {
        icon: isEntrance ? IoEnter : IoExit,
        label: 'Tipo de Movimentação',
        value: isEntrance ? 'Entrada' : 'Saída'
      }
    }

    return {
      icon: IoHelp,
      label: 'Tipo de Movimentação',
      value: 'Entrada/Saída'
    }
  }, [authorizedTransit])

  const ultimosTransitosColumns: Array<TableColumn<LastTransit>> = [
    {
      name: 'Veículo',
      selector: (transit) =>
        `${transit.vehiclePlate} | ${transit.vehicleModel}`,
      center: true,
      sortable: false,
      grow: 1.5
    },
    {
      name: 'Tipo de Movimentação',
      selector: (transit) =>
        transit.transitType === TransitType.Entrance ? 'Entrada' : 'Saída',
      center: true,
      sortable: false,
      grow: 0.5
    },
    {
      name: 'Data/Hora',
      selector: (transit) =>
        DateTime.formatDate(new Date(transit.transitAt), 'dd/MM/yyyy hh:mm'),
      center: true,
      sortable: false
    }
  ]

  return (
    <>
      <PageHeader
        icon={FaEye}
        title="Trânsito da Cancela"
        description="Página de monitoramento em tempo real do trânsito dos motoristas"
        actions={[]}
      />
      <Row>
        <Col md="4">
          <Panel>
            <DriverDetails {...authorizedTransit} />
          </Panel>
        </Col>
        <Col>
          <Row className="mb-3">
            <Col>
              <MessageStatus status={transitStatus} />
            </Col>
          </Row>
          <Row>
            <Col>
              <InfoPanel {...getVehicleInfoPanelParams()} />
            </Col>
            <Col>
              <InfoPanel {...getTransitTypeInfoPanelParams()} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Panel title="Últimos Trânsitos">
                <Table
                  columns={ultimosTransitosColumns}
                  data={authorizedTransit?.lastTransits ?? []}
                />
              </Panel>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default TransitoPage
