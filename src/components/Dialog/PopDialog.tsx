import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { BiCross } from "react-icons/bi";
import { Button, Flex, Select } from "@radix-ui/themes";
import { IoSettings } from "react-icons/io5";

type MetaData = {
    slug: string;
    type: string;
}
type Props = {
    setMetaData: React.Dispatch<React.SetStateAction<MetaData>>
    metadata: MetaData
}

const PopDialog = ({ setMetaData, metadata }: Props) => {
    // const [data, setData] = useState({ slug: "enter slug", type: "blog" })
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button>
                    <IoSettings /> Settings
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Edit profile
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        Make changes to your profile here. Click save when you're done.
                    </Dialog.Description>
                    <fieldset className="mb-[15px]  items-center gap-5">
                        <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                            Slug
                        </label>
                        <input
                            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                            id="slug"
                            defaultValue={metadata.slug}
                            onChange={(e) => setMetaData(data => ({ ...data, slug: e.target.value }))}
                        />
                    </fieldset>
                    <fieldset className=" items-center gap-5 flex relative">


                        <Select.Root defaultValue="blogs" value={metadata.type} onValueChange={e => setMetaData(data => ({ ...data, type: e }))}>
                            <Select.Trigger variant="soft" color="iris" className=" px-2 py-1.5 rounded-sm relative w-full" />
                            <Select.Content position="popper" >
                                <Select.Item value="blogs">Blog Post</Select.Item>
                                <Select.Item value="projects">Project</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </fieldset>
                    <div className="mt-[25px] flex justify-end">
                        <Dialog.Close asChild >
                            <Button >
                                Save changes
                            </Button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <BiCross />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default PopDialog