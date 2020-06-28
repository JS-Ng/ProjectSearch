package project;

import com.blade.Blade;

public class Application {
    public static void main(String[] args) {
        String ps = System.getenv("PORT");
        int port = ps == null ? 8080 : Integer.parseInt(ps);
        Blade bld = Blade.of();
        setUpRouter(bld);
        bld.listen(port).start();
    }

    private static void setUpRouter(Blade bld) {
        bld.get("/", ctx-> {
           ctx.render("index.html");
        });
    }
}
