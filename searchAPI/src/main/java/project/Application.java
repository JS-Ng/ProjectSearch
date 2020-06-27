package project;

import com.blade.Blade;

public class Application {
    public static void main(String[] args) {
        Blade.of().get("/test", ctx-> ctx.text("Hello My project")).listen(8080).start();
    }
}
