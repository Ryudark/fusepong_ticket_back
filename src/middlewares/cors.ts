import type { CorsOptions } from 'cors'

const corsConfig = {
    origin: function (origin: string, response: (res: string | null, cont?: boolean) => void) {
    console.log("ingresa a com");
    response(null, true)
  }
}

export default corsConfig as CorsOptions