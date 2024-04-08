import Button from "@/shared/Button";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";

function SignInPage() {
	return (
		<section className="min-h-[100vh] max-w-screen-xl mx-auto">
			<div className=" h-full md:p-10 p-5">
				<div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
							<div className="g-0 lg:flex lg:flex-wrap">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0 lg:w-6/12">
									<div className="md:mx-6 md:p-12">
										{/* <!--Logo--> */}
										<div className="text-center">
											<img
												className="mx-auto w-48"
												src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
												alt="logo"
											/>
											<h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
												TEAM SAAS
											</h4>
										</div>

										<form>
											<p className="mb-4">
												Please login to your account
											</p>
											{/* <!--Username input--> */}
											<label>
												<p className="pl-2 text-sm font-mono ">Email</p>
												<Input
													type="email"
													// label="Username"
													className="mb-4 border"
												></Input>
											</label>

											{/* <!--Password input--> */}
											<label>
												<p className="pl-2 text-sm font-mono ">Password</p>
												<Input
													type="password"
													// label="Username"
													className="mb-4 border"
												></Input>
											</label>

											{/* <!--Submit button--> */}
											<div className="mb-12 pb-1 pt-1 text-center">
												<div className="w-full">
													<ButtonPrimary
														className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="button"
													>
														Log in
													</ButtonPrimary>
												</div>

												{/* <!--Forgot password link--> */}
												<a href="#!">
													Forgot password?
												</a>
											</div>

											{/* <!--Register button--> */}
											<div className="flex items-center justify-between pb-6">
												<p className="mb-0 mr-2">
													Don't have an account?
												</p>
												<div>
													<ButtonSecondary
														type="button"
														className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
													>
														SignUp
													</ButtonSecondary>
												</div>
											</div>
										</form>
									</div>
								</div>

								{/* <!-- Right column container with background and description--> */}
								<div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600">
									<div className="px-4 py-6 text-white md:mx-6 md:p-12">
										<h4 className="mb-6 text-xl font-semibold">
											We are more than just a company
										</h4>
										<p className="text-sm">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
											exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignInPage;
