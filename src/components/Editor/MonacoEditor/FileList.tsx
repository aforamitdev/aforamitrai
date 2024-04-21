"use client"
import { storage } from "@/firebase/config"
import { list, ref } from "firebase/storage"
import React, { useEffect, useState } from 'react'

type Props = {}

const getData = async () => {
    const storeRef = ref(storage, "/amitrai.me")
    const l = await list(storeRef)
    l.prefixes.map(s => {
        console.log(s)
    })
}
const FileList = (props: Props) => {
    const [fileList, setFiles] = useState([])

    useEffect(() => {

        getData()

    }, [])

    return (
        <div>FileList</div>
    )
}

export default FileList