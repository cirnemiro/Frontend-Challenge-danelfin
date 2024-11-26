"use client";
import {useState} from "react";
import ModalLastUpdate from '@/components/ModalLastUpdate/ModalLastUpdate';

export default function BtnInfoLastUpdate() {
    const [showModalDate, setShowModalDate] = useState(false);

    return (
        <>
        <span>
            <img className="icon-info info-icon-blue-13px"
                 src={process.env.NEXT_PUBLIC_CDN_URL + "/images/icons/info-ico.svg"}
                 alt="info icon"
                 onClick={(e) => setShowModalDate(true)}
            />
        </span>
            <ModalLastUpdate showModal={showModalDate} setShowModal={setShowModalDate}/>
        </>
    )
}

