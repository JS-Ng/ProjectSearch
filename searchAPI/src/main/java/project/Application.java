package project;

import com.blade.Blade;

public class Application {
    public static void main(String[] args) {
        Blade.of().get("/", ctx-> ctx.text("Hello My project")).start();
    }
}
