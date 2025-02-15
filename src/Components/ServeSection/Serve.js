import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Serve = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <section className='serve-section'>
            <div className='container'>
                <div className='line-div'></div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='heading-content position-relative'>
                            <h2 className='heading large ps-md-5 ps-3 mb-0 d-flex align-items-center'>
                                We serve
                            </h2>
                            <h2 className='heading large mb-0 d-md-flex align-items-center justify-content-center ps-md-0 ps-3'>
                                across industries
                            </h2>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <ul className='ps-0 mb-0 listing-items d-flex align-items-lg-end flex-wrap flex-column '>
                            <li className='col-lg-3'>
                                <div className='content-div para-content position-relative' data-aos="fade-left">
                                    <span className='pointer d-flex align-items-center justify-content-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.43934 8.56066C3.87868 9 4.58579 9 6 9C7.41421 9 8.12132 9 8.56066 8.56066C9 8.12132 9 7.41421 9 6C9 4.58579 9 3.87868 8.56066 3.43934C8.12132 3 7.41421 3 6 3C4.58579 3 3.87868 3 3.43934 3.43934C3 3.87868 3 4.58579 3 6C3 7.41421 3 8.12132 3.43934 8.56066Z" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.4393 8.56066C15.8787 9 16.5858 9 18 9C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6C21 4.58579 21 3.87868 20.5607 3.43934C20.1213 3 19.4142 3 18 3C16.5858 3 15.8787 3 15.4393 3.43934C15 3.87868 15 4.58579 15 6C15 7.41421 15 8.12132 15.4393 8.56066Z" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.4393 20.5607C15.8787 21 16.5858 21 18 21C19.4142 21 20.1213 21 20.5607 20.5607C21 20.1213 21 19.4142 21 18C21 16.5858 21 15.8787 20.5607 15.4393C20.1213 15 19.4142 15 18 15C16.5858 15 15.8787 15 15.4393 15.4393C15 15.8787 15 16.5858 15 18C15 19.4142 15 20.1213 15.4393 20.5607Z" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.43934 20.5607C3.87868 21 4.58579 21 6 21C7.41421 21 8.12132 21 8.56066 20.5607C9 20.1213 9 19.4142 9 18C9 16.5858 9 15.8787 8.56066 15.4393C8.12132 15 7.41421 15 6 15C4.58579 15 3.87868 15 3.43934 15.4393C3 15.8787 3 16.5858 3 18C3 19.4142 3 20.1213 3.43934 20.5607Z" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 6H9" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 18H12" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18 12V9" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 15V12" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <h3 className='heading-title mt-3'>DePIN<br /> Networks</h3>
                                </div>
                            </li>
                            <li className='col-lg-6'>
                                <div className='content-div para-content position-relative' data-aos="fade-left">
                                    <span className='pointer d-flex align-items-center justify-content-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 18C21.8011 18.6891 21.4991 19.2323 21.0408 19.682C19.6974 21 17.5354 21 13.2113 21H11.1729C6.84873 21 4.68667 21 3.34333 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34333 4.31802C4.68667 3 6.84873 3 11.1729 3H13.2113C17.5354 3 19.6974 3 21.0408 4.31802C21.4991 4.76771 21.8011 5.31092 22 5.99999" stroke="#070411" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M16.9918 16H17M22 11.1144C20.7204 9.80801 18.9526 9 17 9C15.0474 9 13.2796 9.80801 12 11.1144M14.5 13.6667C15.1398 13.0135 16.0237 12.6095 17 12.6095C17.9763 12.6095 18.8602 13.0135 19.5 13.6667" stroke="#070411" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M6.5 3.5V20.5" stroke="#070411" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <h3 className='heading-title mt-3'>IoT <br />Ecosystems</h3>
                                </div>
                            </li>
                            <li className='col-lg-9'>
                                <div className='content-div para-content position-relative' data-aos="fade-left">
                                    <span className='pointer d-flex align-items-center justify-content-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.5 6C18.4191 4.58055 18.197 3.67665 17.5877 3.02513C16.629 2 15.086 2 12 2C8.914 2 7.37099 2 6.4123 3.02513C5.80299 3.67665 5.58093 4.58055 5.5 6M18.5 18C18.4191 19.4194 18.197 20.3233 17.5877 20.9749C16.629 22 15.086 22 12 22C8.914 22 7.37099 22 6.4123 20.9749C5.80299 20.3233 5.58093 19.4194 5.5 18" stroke="#070411" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2238 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="#070411" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M11 19H13" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4 8.5C4 8.5 5 8.846 5 9.8125C5 10.779 4 11.0335 4 12C4 12.9665 5 13.221 5 14.1875C5 15.154 4 15.5 4 15.5" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20 8.5C20 8.5 19 8.846 19 9.8125C19 10.779 20 11.0335 20 12C20 12.9665 19 13.221 19 14.1875C19 15.154 20 15.5 20 15.5" stroke="#070411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <h3 className='heading-title mt-3'>Healthcare<br /> Devices</h3>
                                </div>
                            </li>
                            <li className='col-12'>
                                <div className='content-div para-content position-relative' data-aos="fade-left">
                                    <span className='pointer d-flex align-items-center justify-content-center'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 13L17 17.5M12 13L7 17.5M12 13V8" stroke="#070411" stroke-width="1.5" />
                                            <path d="M18.1915 16.4456C18.7081 16.1485 18.9664 16 19.25 16C19.5336 16 19.7919 16.1485 20.3085 16.4456L20.9415 16.8097C21.4581 17.1068 21.7164 17.2553 21.8582 17.5C22 17.7447 22 18.0418 22 18.6359V19.3641C22 19.9582 22 20.2553 21.8582 20.5C21.7164 20.7447 21.4581 20.8932 20.9415 21.1903L20.3085 21.5544C19.7919 21.8515 19.5336 22 19.25 22C18.9664 22 18.7081 21.8515 18.1915 21.5544L17.5585 21.1903C17.0419 20.8932 16.7836 20.7447 16.6418 20.5C16.5 20.2553 16.5 19.9582 16.5 19.3641V18.6359C16.5 18.0418 16.5 17.7447 16.6418 17.5C16.7836 17.2553 17.0419 17.1068 17.5585 16.8097L18.1915 16.4456Z" stroke="#070411" stroke-width="1.5" />
                                            <path d="M3.69152 16.4456C4.2081 16.1485 4.46638 16 4.75 16C5.03362 16 5.2919 16.1485 5.80848 16.4456L6.44152 16.8097C6.9581 17.1068 7.21638 17.2553 7.35819 17.5C7.5 17.7447 7.5 18.0418 7.5 18.6359V19.3641C7.5 19.9582 7.5 20.2553 7.35819 20.5C7.21638 20.7447 6.9581 20.8932 6.44152 21.1903L5.80848 21.5544C5.2919 21.8515 5.03362 22 4.75 22C4.46638 22 4.2081 21.8515 3.69152 21.5544L3.05848 21.1903C2.5419 20.8932 2.28362 20.7447 2.14181 20.5C2 20.2553 2 19.9582 2 19.3641V18.6359C2 18.0418 2 17.7447 2.14181 17.5C2.28362 17.2553 2.5419 17.1068 3.05848 16.8097L3.69152 16.4456Z" stroke="#070411" stroke-width="1.5" />
                                            <path d="M10.9415 2.44563C11.4581 2.14854 11.7164 2 12 2C12.2836 2 12.5419 2.14854 13.0585 2.44563L13.6915 2.8097C14.2081 3.10679 14.4664 3.25533 14.6082 3.5C14.75 3.74467 14.75 4.04175 14.75 4.63593V5.36407C14.75 5.95825 14.75 6.25533 14.6082 6.5C14.4664 6.74467 14.2081 6.89321 13.6915 7.1903L13.0585 7.55437C12.5419 7.85146 12.2836 8 12 8C11.7164 8 11.4581 7.85146 10.9415 7.55437L10.3085 7.1903C9.7919 6.89321 9.53362 6.74467 9.39181 6.5C9.25 6.25533 9.25 5.95825 9.25 5.36407V4.63593C9.25 4.04175 9.25 3.74467 9.39181 3.5C9.53362 3.25533 9.7919 3.10679 10.3085 2.8097L10.9415 2.44563Z" stroke="#070411" stroke-width="1.5" />
                                        </svg>
                                    </span>
                                    <h3 className='heading-title mt-3'>Smart<br /> Infrastructure.</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Serve