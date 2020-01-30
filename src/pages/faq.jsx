/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/faq.jsx
 */

import React from "react";
import { Link } from 'gatsby'
import Helmet from "react-helmet";
import Layout from '../layout'
import SubHeader from '../components/SubHeader'
import Subscribe from '../components/Subscribe'

const SupportView = () => (
	<Layout>

		<Helmet>
			<title>Frequently Asked Questions</title>
			<meta name="description" content="The USVA represents the e-liquid manufacturers, device manufacturers, wholesalers, distributors, vape shop owners, small business owners and entrepreneurs who have developed innovative and quality vapor products"/>
			<meta name='Keywords' content='United States Vaping Association, Vaping Association, Frequently Asked Questions'/>
			<meta name="robots" content="index, nofollow, noarchive" />
		</Helmet>

		<SubHeader pageTitle="Frequently Asked Questions" breadcrumb="FAQs" />

		<section id='main-content'>
			<div className='container'>
				<div className='row'>
					<div className='main-page'>
						<div id='single-blog' className='single-blog-warp'>

							{/* COMMENT
							TWO HORIZONTAL BLOCKS OF TEXT - ONE YELLOW, ONE BLACK
							*/}
							<p className='faq-heading'>
								The USVA is one bad ass mother fucker, who with out compromise will tear you a new
								asshole, drink all your liquor, bone your betty, and do so with a smile on our face.</p>

							<p>
								The Vapor Technology Association represents the e-liquid manufacturers, device
								manufacturers, wholesalers, distributors, vape shop owners, small business owners and
								entrepreneurs who have developed innovative and quality vapor products, providing adult
								consumers with a better alternative to traditional combustible products. VTA and its
								members are leaders in the vapor community, promoting small businesses and job growth,
								responsible public policies and regulations, and a high standard of safety within the
								industry.</p>


							{/* COMMENT
							JUST THE FACTS - START OF THE ACCORDION
							*/}
							<div className='faq-panel' id='accordion' role='tablist' aria-multiselectable='true'>


								{/* COMMENT
								PANEL CONTAINING ONE FAQ - CONTAINS CHILD HEADER AND BODY
								REPEAT AS NEEDED
								*/}
								<div className='panel panel-custom border-color-theme'>
									<div className='panel-heading ' role='tab' id='headingOne'>
										<h4 className='panel-title'>
											<a role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Can we, will we Sue Anyone
											</a>
										</h4>
									</div>

									<div id='collapseOne' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'>
										<div className='panel-body'>
											Pellentesque eleifend euismod sapien non egestas. Donec
											ante sapien, semper tristique nulla vitae, porttitor
											consequat nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit
										</div>
									</div>
								</div>


								{/* COMMENT
								PANEL CONTAINING ONE FAQ - CONTAINS CHILD HEADER AND BODY
								REPEAT AS NEEDED
								*/}
								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='headingTwo'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												What is USVA?
											</a>
										</h4>
									</div>
									<div id='collapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwo'>
										<div className='panel-body'>
											The Vapor Technology Association represents the e-liquid manufacturers,
											device manufacturers, wholesalers, distributors, vape shop owners, small
											business owners and entrepreneurs who have developed innovative and quality
											vapor products, providing adult consumers with a better alternative to
											traditional combustible products. VTA and its members are leaders in the
											vapor community, promoting small businesses and job growth, responsible
											public policies and regulations, and a high standard of safety within the
											industry.
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='headingThree'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Why should I join VTA?
											</a>
										</h4>
									</div>
									<div id='collapseThree' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingThree'>
										<div className='panel-body '>
											VTA serves as the leading advocate for manufacturers, wholesalers,
											suppliers, vape shop owners, and small business owners in the vapor
											technology industry who not only continue to develop new technologies for
											the benefit of public health, but also promote small businesses and job
											growth across the country. VTA and its leadership bring sound policy and a
											rational perspective to the industry and a responsible approach to the
											public policies that impact it.
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='headingFour'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Who are VTA’s Members and How Do I Join?
											</a>
										</h4>
									</div>
									<div id='collapseFour' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFour'>
										<div className='panel-body '>
											Innovation in the vapor technology industry is driven by small and mid-size
											business owners in communities across this country. VTA’s members include
											industry leading device manufacturers, e-liquid manufacturers, distributors,
											wholesalers, vape shops, flavor companies, suppliers, importers, and
											independent state vapor associations.
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='heading5'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse5' aria-expanded='false' aria-controls='collapse5'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Why is the FDA’s approach to regulating vapor products misguided?
											</a>
										</h4>
									</div>
									<div id='collapse5' className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading5'>
										<div className='panel-body '>
											<p>The Tobacco Control Act of 2009 was written in response to the public
											   health crisis generated by combustible cigarettes at a time when vapor
											   products were virtually unknown. Nevertheless, FDA requires pre-market
											   review of all products. By applying the same requirements and predicate
											   date – February 15, 2007 – to current vapor products, the FDA’s rules
											   will effectively eliminate e-cigarettes as an anti-smoking alternative,
											   quashing the first game-changing technology in the ongoing campaign to
											   reduce cigarette smoking.</p>
											<p>Furthermore, by treating vapor products like traditional combustible
											   tobacco cigarettes, the FDA does not address the need for responsible
											   regulation of vapor products independent of the tobacco industry.
											   E-cigarettes constitute an entirely new technology and should be
											   treated as such. But, in the years since the implementation of the
											   Deeming Regulation, the FDA has failed to develop any innovative
											   approach to regulating a 21st century technology.</p>
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='heading6'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse6' aria-expanded='false' aria-controls='collapse6'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Why should the FDA treat vapor products differently than combustible cigarettes?
											</a>
										</h4>
									</div>
									<div id='collapse6' className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading6'>
										<div className='panel-body '>
											According to a vast and growing body of peer-reviewed scientific research,
											responsibly manufactured e-cigarettes are not only a safer alternative to
											traditional combustible products, but they also provide many individuals
											with a viable path to reduce tobacco smoking and even quit altogether.
											Considering that the National Health Service of the United Kingdom promotes
											e-cigarettes as one of their smoking cessation tools and now has vape shops
											opening inside National Health System hospitals speaks volumes about how far
											behind the U.S. is in recognizing the potential for vapor products.
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='heading7'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse7' aria-expanded='false' aria-controls='collapse7'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Laboris nisi ut aliquip ex ea commodo
											</a>
										</h4>
									</div>
									<div id='collapse7' className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading7'>
										<div className='panel-body '>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='heading8'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse8' aria-expanded='false' aria-controls='collapse8'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												In consectetur adipisicing elit Tortor Faucibus, At Lacinia Libero
											</a>
										</h4>
									</div>
									<div id='collapse8' className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading8'>
										<div className='panel-body '>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</div>
									</div>
								</div>

								<div className='panel panel-custom '>
									<div className='panel-heading ' role='tab' id='heading9'>
										<h4 className='panel-title'>
											<a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse9' aria-expanded='false' aria-controls='collapse9'>
												<i className='fa fa-question-circle' aria-hidden='true'></i>
												Cillum dolore eu fugiat nulla pariatur
											</a>
										</h4>
									</div>
									<div id='collapse9' className='panel-collapse collapse' role='tabpanel' aria-labelledby='heading9'>
										<div className='panel-body '>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className='sidebar-page'>
						<div id='sidebar' className='main-sidebar'>
							<div className='widget widget-support'>
								<div className='avatar-supporter'>
									{/*<img
										src='http://placehold.it/1698x1131/DEB152/000000.png'
										className='img-responsive' alt='Image'/>*/}
									<img
										src='/images/pages/faq/1234567890.jpg'
										className='img-responsive'
										alt='Image'/>

								</div>
								<div className='content-support bg-sub'>

									<h4>Need More Support?</h4>

									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>

									<Link href='/contact'>
										<a className='ot-btn btn-main-bg btn-rounded bg-theme bg-main-theme-callback text-up white-text'>CONTACT US <i className='fa fa-arrow-circle-right' aria-hidden='true'></i></a>
									</Link>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>

		</section>

		<Subscribe/>

	</Layout>
)

export default SupportView
