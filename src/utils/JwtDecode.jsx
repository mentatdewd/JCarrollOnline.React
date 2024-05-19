import { useJwt } from "react-jwt";

export async function JWTDecode() {
    const token = window.localStorage.getItem("token")

    const { decodedToken } = useJwt(token);
    console.log(decodedToken)
}