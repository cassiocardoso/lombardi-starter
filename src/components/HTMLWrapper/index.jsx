import styled from 'styled-components'
import tw from 'twin.macro'

export const HTMLWrapper = styled.div`
	h1, h2, h3, h4, h5, h6 {
		${tw`font-semibold`}
	}

	h1, h2, h3 {
		${tw`my-4`}
	}

	h4, h5, h6 {
		${tw`my-2`}
	}

	h1 {
		${tw`text-4xl`}
	}

	h2 {
		${tw`text-3xl`}
	}

	h3 {
		${tw`text-2xl`}
	}

	h4 {
		${tw`text-xl`}
	}

	h5 {
		${tw`text-lg`}
	}

	h6 {
		${tw`text-base`}
	}

	p {
		${tw`mb-4`}
	}

	ol {
		${tw`pl-8`}
		list-style: decimal;
	}

	ul {
		${tw`pl-8`}
		list-style: disc;
	}
`
