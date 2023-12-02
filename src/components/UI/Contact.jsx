import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="pb-16">
            <div className="container">
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
                    Get in touch
                </h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            className="border-0 w-full h-full"
                            title="google-maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1547.4984653597398!2d-84.51482297832551!3d39.129301294724314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3f2d2793b15%3A0xc637b38668f23686!2s2585%20Dennis%20St%20%231100%2C%20Cincinnati%2C%20OH%2045219!5e0!3m2!1sen!2sus!4v1701275022213!5m2!1sen!2sus"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-[#dcdcdc] px-4 lg:px-8 py-8">
                        <form className="w-full">
                            <div className="mb-5">
                                <input type="text"
                                    placeholder="Name"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <div className="mb-5">
                                <input type="email"
                                    placeholder="Email"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <div className="mb-5">
                                <input type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <div className="mb-5">
                                <textarea type="text"
                                    rows={4}
                                    placeholder="Write your message."
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact;