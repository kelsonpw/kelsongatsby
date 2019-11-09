import React from 'react'
import { Container } from 'components/common'
import github from 'assets/icons/github.svg'
import twitter from 'assets/icons/twitter.svg'
import { Wrapper, Flex, Links, Details } from './styles'

import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<span>© All rights reserved | {new Date().getFullYear()} </span>
			</Details>
			<Links>
				<a
					href="https://github.com/kelsonpw"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="follow me on Github"
				>
					<img width="24" src={github} alt="Follow me on GitHub" />
				</a>
				<a
					href="https://twitter.com/kelsonpw"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="follow me on Github"
				>
					<img width="24" src={twitter} alt="Follow me on Twitter" />
				</a>
			</Links>
		</Flex>
	</Wrapper>
)
