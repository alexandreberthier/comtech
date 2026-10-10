
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { resetFtp, updateFtp } from "../store/athletSlice";

export function useFtp(){
    const dispatch = useDispatch()
    const ftp = useSelector((state: RootState)=> state.athlet.ftp)

    function setFtp(value: number){
        dispatch(updateFtp(value))
    }

    function clearFtp(){
        dispatch(resetFtp())
    }

    return {
        ftp, setFtp, clearFtp
    }
}