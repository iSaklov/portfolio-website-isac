import { headers } from 'next/headers'
import UAParser from 'ua-parser-js'

export function getDeviceType() {
  // server-side only
  const userAgent = headers().get('user-agent')
  const parser = new UAParser(userAgent || '')
  // client-side only
  // const parser = new UAParser()

  // 	# Possible 'device.type':
  // console, mobile, tablet, smarttv, wearable, embedded

  // ##########
  // # NOTE: 'desktop' is not a possible device type.
  // # UAParser only reports info directly available from the UA string, which is not the case for 'desktop' device type.
  // # If you wish to detect desktop devices, you must handle the needed logic yourself.
  // # You can read more about it in this issue: https://github.com/faisalman/ua-parser-js/issues/182
  // ##########

  const deviceType = parser.getDevice().type

  return deviceType
}
