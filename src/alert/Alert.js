import React from "react";
import {useAlert} from "./AlertContext";

export default function Alert() {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div className='mt-3 alert alert-danger' onClick={alert.toggle}>
            This message very and very important
        </div>
    )
}