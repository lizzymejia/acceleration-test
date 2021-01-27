while True:
    if input.acceleration(Dimension.Y) > 10:
        light.set_all(light.rgb(123,234,210))
    else:
        light.clear()