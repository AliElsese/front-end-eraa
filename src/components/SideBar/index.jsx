import { useContext } from 'react';
import './index.css'
import { ProjectContext } from '../../Context/store';

export default function SideBar() {
    const {isSideBarOpen} = useContext(ProjectContext);

    return (
        <>
            <div className={`d-flex flex-column side-bar ${isSideBarOpen ? 'open' : 'closed'}`}>
                <button className='d-flex justify-content-center side-btn'>
                    <a href="" className='d-flex justify-content-start align-items-center side-link'>
                        <svg viewBox="0 0 24 24" focusable="false" className="side-icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g id="User">
                                    <g>
                                        <path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path>
                                        <path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </svg>
                        {isSideBarOpen && <span>الحساب</span>}
                    </a>
                </button>
                <button className='d-flex justify-content-center side-btn'>
                    <a href="" className='d-flex justify-content-start align-items-center side-link'>
                        <svg viewBox="0 0 24 24" focusable="false" className="side-icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m344 280 88-88m-200 24 64 64M80 320l104-104"></path>
                                <circle cx="456" cy="168" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                                <circle cx="320" cy="304" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                                <circle cx="208" cy="192" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                                <circle cx="56" cy="344" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                            </svg>
                        </svg>
                        {isSideBarOpen && <span>الاحصائيات</span>}
                    </a>
                </button>
                <button className='d-flex justify-content-center side-btn'>
                    <a href="" className='d-flex justify-content-start align-items-center side-link'>
                        <svg viewBox="0 0 24 24" focusable="false" className="side-icon">
                            <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path>
                            </svg>
                        </svg>
                        {isSideBarOpen && <span>المحررين</span>}
                    </a>
                </button>
                <button className='d-flex justify-content-center side-btn'>
                    <a href="" className='d-flex justify-content-start align-items-center side-link'>
                        <svg viewBox="0 0 24 24" focusable="false" className="side-icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
                            </svg>
                        </svg>
                        {isSideBarOpen && <span>الطلاب</span>}
                        {
                            isSideBarOpen && 
                            <svg viewBox="0 0 24 24" focusable="false" className="side-icon-arrow" aria-hidden="true">
                                <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                            </svg>
                        }
                    </a>
                </button>
            </div>
        </>
    )
}