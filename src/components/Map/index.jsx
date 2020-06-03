import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import config from '../../../lombardi.config'

const MapWrapper = styled.div`
  ${tw`lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}

  iframe {
    ${tw`absolute inset-0 h-full w-full`}
  }
`

const MapDetails = styled.div`
  ${tw`bg-white relative flex flex-wrap py-6`}

  div {
    ${tw`lg:w-1/2 px-6`}

    + div {
      ${tw`lg:mt-0`}
    }
  }

  h2 {
    ${tw`font-medium text-gray-900 tracking-widest text-sm`}
  }

  p {
    ${tw`leading-relaxed`}
  }

  a {
    ${tw`text-gray-500 leading-relaxed`}
  }
`

export const Map = () => (
  <MapWrapper>
    <iframe
      style={{ filter: 'grayscale(1) contrast(1.2) opacity(.4)' }}
      frameBorder="0"
      title="map"
      marginHeight="0"
      marginWidth="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Berlin&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
    />
    <MapDetails>
      <div>
        <h2>ADDRESS</h2>
        <p>{config.contact.address}</p>
      </div>
      <div>
        <h2>EMAIL</h2>
        <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
        <h2>PHONE</h2>
        <p>{config.contact.phone}</p>
      </div>
    </MapDetails>
  </MapWrapper>
)
