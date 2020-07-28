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
							My mission is to connect businesses and custormers or clients through mordern technology which brings the world of endless possibilities.

						</p>
					</div>
					<div className='tile'>
						<h4> Social </h4>
						<p>
							
							<ul className='listContacts'>
								<li> <a href='https://facebook.com'> </a> <FaFacebook />  Facebook  </li>
								<li> <a href='https://linkedin.com'>  </a> <FaLinkedin />  LinkedIn </li>
								<li> <a href='t.me'> </a> <FaTelegram />  Telegram </li>
								<li> <a href='https://github.com/ErrolNtetha'>  </a> <FaGithub />  GitHub </li>
								<li> <a href='WhatsApp'> </a> <FaWhatsapp className='what' />  WhatsApp </li>
							</ul>
						</p>
						
					</div>
					<div className='tile'>
						<h4> Resources </h4>
						<p>
							<ul className='listContacts'>
								<li> <a href='https://facebook.com'> </a> Projects  </li>
								<li> <a href='https://linkedin.com'>  </a> Open Source </li>
								<li> <a href='t.me'> </a> Downlaods </li>
								<li> <a href='https://github.com'>  </a> Affiliates </li>
								<li> <a href='WhatsApp'> </a> WhatsApp </li>
							</ul>
						</p>
						
					</div>
					<div className='tile'>
						<h4> Value </h4>
						<p className='paraTile'>
						  I value myself, my work and always committed to everything that I do.  
						  I am of a great value in the mordern world.
						</p>
					</div>
				</div>
				<div className='rights'> Copyright © 2020, Mphumeleli Ntetha. All Rights Reserved.  </div>
			</div> 
		)
	}
} 
