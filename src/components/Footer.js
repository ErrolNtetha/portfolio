import React, { Component } from 'react';
import { FaFacebook, FaLinkedin, FaTelegram, FaGithub, FaWhatsapp, FaSearch	} from 'react-icons/fa'
import '../App.css'

export default class Footer extends Component {
	render() {
		return (
			// Outer div 
			<div className='footContainer'> 
				<div className='tile-row'>
					<div className='tile'>
						<h4> Mission </h4>
						<p className='paraTile'>
							My mission is to connect businesses and custormers or clients through mordern technology which brings the world endless possibilities.

						</p>
					</div>
					<div className='tile'>
						<h4> Contact Me </h4>
						<p>
							
							<ul className='listContacts'>
								<li> <a href='https://facebook.com'> <FaFacebook />  Facebook </a> </li>
								<li> <a href='https://linkedin.com'> <FaLinkedin />  LinkedIn </a> </li>
								<li> <a href='t.me'> <FaTelegram />  Telegram </a> </li>
								<li> <a href='https://github.com'> <FaGithub />  GitHub </a> </li>
								<li> <a href='WhatsApp'> <FaWhatsapp className='what' />  WhatsApp </a> </li>
							</ul>
						</p>
						
					</div>
					<div className='tile'>
						<h4> Value </h4>
						<p className='paraTile'>
						  I value myself, my work and always committed to everything that i do.  
						  I am of a debious value in the mordern world.
						</p>
					</div>
				</div>
				<div className='rights'> Copyright © 2020 Mphumeleli Ntetha. All Rights Reserved.  </div>
			</div> 
		)
	}
} 