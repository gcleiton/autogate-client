export type AuthorizedTransit = {
  name: string
  email: string
  license: string
  phone: string
  photoUrl: string
  transitTotal: number
  transitType: number
  vehicleCategory: string
  vehicleModel: string
  vehiclePlate: string
  lastTransits: LastTransit[]
}

export type LastTransit = {
  transitAt: string
  transitType: number
  vehicleCategory: 'Bicicleta'
  vehicleModel: 'Sedan'
  vehiclePlate: 'BRA1234'
}
