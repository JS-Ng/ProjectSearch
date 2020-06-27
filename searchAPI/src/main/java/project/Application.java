package project;

import com.blade.Blade;

public class Application {
    public static void main(String[] args) {
        String ps = System.getenv("PORT");
        int port = ps == null ? 8080 : Integer.parseInt(ps);
        Blade.of().get("/test", ctx-> ctx.text("Hello My project")).listen(port).start();
    }
}
