import { ReactNode } from "react";
import { HiShieldCheck } from "react-icons/hi";
import { MdAnalytics, MdCancel } from "react-icons/md";

type AccordionItem = {
    icon: ReactNode;
    heading: string;
    detail: string;
};

const accodianData = [
    {
        icon: <HiShieldCheck/>,
        heading: 'Best interest rates on the market',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent nec ex vel libero consectetur condimentum. Sed eu semper libero. Nam aliquet',
    }, 
    {
        icon: <MdCancel/>,
        heading: 'Prevent unstable prices',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent nec ex vel libero consectetur condimentum. Sed eu semper libero. Nam aliquet',
    },
    {
        icon: <MdAnalytics/>,
        heading: 'Best price on the market',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent nec ex vel libero consectetur condimentum. Sed eu semper libero. Nam aliquet',
    }, 
]

export default accodianData;