import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import mountains from 'assets/illustrations/mountains.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi, I'm Kelson Warner</h1>
				<h4>Software Engineer</h4>
			</Details>
			<Thumbnail>
				<img src={mountains} alt="Hi, I'm Kelson Warner" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
