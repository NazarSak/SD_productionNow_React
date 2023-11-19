import React from 'react'
import { ButtonClose, EmailForm } from './contactUs.styled'
import BackgroundImg from '../../assets/img/backgroundCircle.png'

export const ContactUsEN = () => {
  return (
		<>
			<ButtonClose to='/'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M5 5L19.1421 19.1421'
						stroke='#FCFCFC'
						stroke-width='1.5'
						stroke-linecap='round'
					/>
					<path
						d='M5 19.1426L19.1421 5.00044'
						stroke='#FCFCFC'
						stroke-width='1.5'
						stroke-linecap='round'
					/>
				</svg>
			</ButtonClose>
			<EmailForm>
				<h1>
					Contact <span>Us</span>
				</h1>
				<p>We'll help you find the right plan and pricing for your business.</p>
				<form>
					<input
						class='text'
						type='text'
						name='name'
						placeholder='Name *'
						required
					/>
					<input
						class='text emailInput'
						type='email'
						name='email'
						placeholder='Email *'
						required
					/>
					<input
						class='message'
						type='text'
						name='message'
						placeholder='Comment'
					/>
					<button type='submit'>
						Send
					</button>
				</form>
			</EmailForm>
		</>
	)
}