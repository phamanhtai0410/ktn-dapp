const NavQrCode = ({ checkQr, setCheckQr }) => {
    return (
        <div className="hidden absolute top-0 left-0 w-full h-[44px] rounded-t-2xl transition ease-linear delay-150 group-hover:grid grid-cols-2 gap-x-[1px]">
            <div onClick={() => { setCheckQr(!checkQr) }} className="bg-[rgba(0,0,0,0.5)] cursor-pointer flex items-center justify-center text-sm font-semibold text-[#fff]">
                {!checkQr ? "Show QR Code" : "Hide QR Code"}
            </div>
            <div className="bg-[rgba(0,0,0,0.5)] cursor-pointer flex items-center justify-center text-sm font-semibold text-[#fff]">
                Copy NFT
            </div>
        </div>
    )
}
export default NavQrCode;