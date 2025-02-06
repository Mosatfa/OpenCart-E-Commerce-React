import Cookies from 'universal-cookie';


class CookieService {
    private cookies: Cookies

    constructor() {
        this.cookies = new Cookies()
    }

    setCookie(name: string, value: string, options?: object): void {        
        this.cookies.set(name, value, { path: '/', ...options });
    }

    getCookie(name: string): string | undefined {
        return this.cookies.get(name);
    }

    removeCookie(name: string, options?: object): void {
        this.cookies.remove(name, { path: '/', ...options });
    }
}

export default new CookieService()