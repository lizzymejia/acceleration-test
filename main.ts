while (true) {
    if (input.acceleration(Dimension.Y) > 10) {
        light.setAll(light.rgb(123, 234, 210))
    } else {
        light.clear()
    }
    
}
