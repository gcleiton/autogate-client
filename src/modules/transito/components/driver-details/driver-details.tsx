import { AuthorizedTransit } from '@core/models'
import { MaskUtils } from '@core/utils'
import { DefaultPicture } from '@presentation/assets'
import React from 'react'
import { Ratio } from 'react-bootstrap'
import { DriverDetailItem } from './components'
import * as S from './driver-details.styles'

type Props = Partial<
  Pick<AuthorizedTransit, 'name' | 'email' | 'phone' | 'license' | 'photoUrl'>
>

const DriverDetails: React.FC<Props> = ({
  name,
  email,
  phone,
  license,
  photoUrl
}) => {
  return (
    <>
      <S.DriverPicture>
        <Ratio aspectRatio={'3x4'} style={{ height: '100%' }}>
          {photoUrl ? (
            <S.Picture src={photoUrl} />
          ) : (
            <S.DefaultPictureWrapper>
              <DefaultPicture />
            </S.DefaultPictureWrapper>
          )}
        </Ratio>
      </S.DriverPicture>
      <hr></hr>
      <>
        <DriverDetailItem label="Nome" value={name} />
        <DriverDetailItem label="E-mail" value={email} />
        <DriverDetailItem
          label="Telefone"
          value={phone && MaskUtils.maskPhone(phone)}
        />
        <DriverDetailItem label="CNH" value={license} />
      </>
    </>
  )
}

export default DriverDetails
