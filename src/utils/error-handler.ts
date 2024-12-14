import {Response} from "express"
import ERROR_CODE from "./constans/ERROR_CODE"
import ERROR_MESSAGE from "./constans/ERROR_MESSAGE"

export default function errorHandler(res: Response, err: Error) {
   let message = err.message

   res.status(ERROR_CODE[message] || 500).json({
      error: ERROR_MESSAGE[message] || message,
   })
}
