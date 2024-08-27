

function init(event){
    
    // Get the item
    var item = event.item;
    item.setDurabilityValue(1);
    item.setDurabilityShow(false);
    item.setCustomName("§6§lBank Key");
    item.setTexture(1,"variedcommodities:key2");
    item.setMaxStackSize(1);
}

function interact(event){
    var x = -1899;
    var y = 63;
    var z = 232;

    var player = event.player;
    var world = player.world;

    // check if player is near the gate
    if (player.getPos().getX() < x - 5 || player.getPos().getX() > x + 5 || player.getPos().getZ() < z - 5 || player.getPos().getZ() > z + 5) {
        player.message("This key must be used near the gate.");
        return;
    }

    // check if the gate is closed
    if (!world.getBlock(x, y, z).isAir()) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 2; j++) {
                world.setBlock(x, y + i, z + j, "minecraft:air", 0);
    
                // play iron door sound
                player.playSound("minecraft:block.iron_door.open", 1, 1);
            }
        }
    
        // delete this scripted item from inventory
        event.item.setStackSize(0);
        player.message("The gate is now open.");
    } else {
        player.message("The gate is already open.");
    }
}