export function formatLicenceNumber(licenceNumber: string) {
  if(licenceNumber.includes('-')) {
    licenceNumber = licenceNumber.split('-').join('')
  }
  return licenceNumber.match(/.{1,2}/g)?.join('-')
}
