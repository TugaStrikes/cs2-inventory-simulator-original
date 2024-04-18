/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CS_Economy, CS_ITEMS, CS_Item } from "@ianlucas/cs2-lib";
import { describe, expect, test } from "vitest";
import { createFakeInventoryItem } from "~/utils/inventory";
import { has } from "~/utils/misc";
import { nameItemFactory } from "./use-name-item";

CS_Economy.use(CS_ITEMS);

const translate = (token: string, ...values: string[]) => "StatTrak™";
const nameItem = nameItemFactory(translate);
const nameItemString = (...args: Parameters<typeof nameItem>) =>
  nameItem(...args)
    .filter((value) => has(value))
    .join(" | ");

const AK47_STOCK_ITEM = CS_Economy.getById(4);
const AK47_ASIIMOV_ITEM = CS_Economy.getById(244);
const KARAMBIT_VANILLA_ITEM = CS_Economy.getById(41);
const KARAMBIT_DOOPLER_ITEM = CS_Economy.getById(1347);
const HAND_WRAPS_STOCK_ITEM = CS_Economy.getById(62);
const HAND_WRAPS_SLAUGHTER_ITEM = CS_Economy.getById(1741);
const STICKER_ENCE_RIO_2022_ITEM = CS_Economy.getById(7241);
const SPECIAL_AGENT_AVA_FBI_ITEM = CS_Economy.getById(8632);
const PATCH_DRAGON_ITEM = CS_Economy.getById(8561);
const MUSIC_KIT_DESERT_FIRE_ITEM = CS_Economy.getById(1786);
const GRAFFITI_EZ_ITEM = CS_Economy.getById(9549);
const COLLECTIBLE_ALYX_PIN_ITEM = CS_Economy.getById(9128);
const CONTAINER_KILOWATT_CASE_ITEM = CS_Economy.getById(11422);
const KEY_KILOWATT_CASE_KEY_ITEM = CS_Economy.getById(11423);
const TOOL_STORAGE_UNIT_ITEM = CS_Economy.getById(11262);

const stattrak = (item: CS_Item) =>
  createFakeInventoryItem(item, {
    stattrak: 0
  });

const nametag = (item: CS_Item) =>
  createFakeInventoryItem(item, {
    nametag: "CustomName"
  });

const stattrakAndNametag = (item: CS_Item) =>
  createFakeInventoryItem(item, {
    stattrak: 0,
    nametag: "CustomName"
  });

describe("test useNameItem hook", () => {
  test("'default' formatter", () => {
    expect(nameItem(AK47_STOCK_ITEM)).toEqual(["AK-47", ""]);
    expect(nameItem(AK47_ASIIMOV_ITEM)).toEqual(["AK-47", "Asiimov"]);
    expect(nameItem(stattrak(AK47_ASIIMOV_ITEM))).toEqual([
      "StatTrak™ AK-47",
      "Asiimov"
    ]);
    expect(nameItem(nametag(AK47_ASIIMOV_ITEM))).toEqual(["AK-47", "Asiimov"]);
    expect(nameItem(stattrakAndNametag(AK47_ASIIMOV_ITEM))).toEqual([
      "StatTrak™ AK-47",
      "Asiimov"
    ]);
    expect(nameItem(KARAMBIT_VANILLA_ITEM)).toEqual(["★ Karambit", ""]);
    expect(nameItem(KARAMBIT_DOOPLER_ITEM)).toEqual(["★ Karambit", "Doppler"]);
    expect(nameItem(HAND_WRAPS_SLAUGHTER_ITEM)).toEqual([
      "Hand Wraps",
      "Slaughter"
    ]);
    expect(nameItem(STICKER_ENCE_RIO_2022_ITEM)).toEqual([
      "Sticker",
      "ENCE | Rio 2022"
    ]);
    expect(nameItem(SPECIAL_AGENT_AVA_FBI_ITEM)).toEqual([
      "Special Agent Ava",
      "FBI"
    ]);
    expect(nameItem(PATCH_DRAGON_ITEM)).toEqual(["Patch", "Dragon"]);
    expect(nameItem(MUSIC_KIT_DESERT_FIRE_ITEM)).toEqual([
      "Music Kit",
      "Austin Wintory, Desert Fire"
    ]);
    expect(nameItem(GRAFFITI_EZ_ITEM)).toEqual(["Graffiti", "EZ"]);
    expect(nameItem(COLLECTIBLE_ALYX_PIN_ITEM)).toEqual(["Alyx Pin", ""]);
    expect(nameItem(CONTAINER_KILOWATT_CASE_ITEM)).toEqual([
      "Kilowatt Case",
      ""
    ]);
    expect(nameItem(KEY_KILOWATT_CASE_KEY_ITEM)).toEqual([
      "Kilowatt Case Key",
      ""
    ]);
    expect(nameItem(TOOL_STORAGE_UNIT_ITEM)).toEqual(["Storage Unit", ""]);
    expect(nameItem(nametag(TOOL_STORAGE_UNIT_ITEM))).toEqual([
      "Storage Unit",
      ""
    ]);
  });

  test("'case-contents-name' formatter", () => {
    expect(nameItemString(AK47_ASIIMOV_ITEM, "case-contents-name")).toBe(
      "AK-47 | Asiimov"
    );
    expect(
      nameItemString(STICKER_ENCE_RIO_2022_ITEM, "case-contents-name")
    ).toBe("ENCE | Rio 2022");
    expect(nameItemString(PATCH_DRAGON_ITEM, "case-contents-name")).toBe(
      "Dragon"
    );
    expect(
      nameItemString(MUSIC_KIT_DESERT_FIRE_ITEM, "case-contents-name")
    ).toBe("Austin Wintory, Desert Fire");
    expect(nameItemString(GRAFFITI_EZ_ITEM, "case-contents-name")).toBe("EZ");
    expect(
      nameItemString(COLLECTIBLE_ALYX_PIN_ITEM, "case-contents-name")
    ).toBe("Alyx Pin");
  });

  test("'craft-name' formatter", () => {
    expect(nameItemString(AK47_STOCK_ITEM, "craft-name")).toBe("AK-47");
    expect(nameItemString(AK47_ASIIMOV_ITEM, "craft-name")).toBe("Asiimov");
    expect(nameItemString(KARAMBIT_VANILLA_ITEM, "craft-name")).toBe(
      "★ Karambit"
    );
    expect(nameItemString(KARAMBIT_DOOPLER_ITEM, "craft-name")).toBe("Doppler");
    expect(nameItemString(HAND_WRAPS_STOCK_ITEM, "craft-name")).toBe(
      "Hand Wraps"
    );
    expect(nameItemString(HAND_WRAPS_SLAUGHTER_ITEM, "craft-name")).toBe(
      "Slaughter"
    );
    expect(nameItemString(STICKER_ENCE_RIO_2022_ITEM, "craft-name")).toBe(
      "ENCE | Rio 2022"
    );
    expect(nameItemString(SPECIAL_AGENT_AVA_FBI_ITEM, "craft-name")).toBe(
      "Special Agent Ava"
    );
    expect(nameItemString(PATCH_DRAGON_ITEM, "craft-name")).toBe("Dragon");
    expect(nameItemString(MUSIC_KIT_DESERT_FIRE_ITEM, "craft-name")).toBe(
      "Austin Wintory, Desert Fire"
    );
    expect(nameItemString(GRAFFITI_EZ_ITEM, "craft-name")).toBe("EZ");
    expect(nameItemString(COLLECTIBLE_ALYX_PIN_ITEM, "craft-name")).toBe(
      "Alyx Pin"
    );
    expect(nameItemString(CONTAINER_KILOWATT_CASE_ITEM, "craft-name")).toBe(
      "Kilowatt Case"
    );
    expect(nameItemString(KEY_KILOWATT_CASE_KEY_ITEM, "craft-name")).toBe(
      "Kilowatt Case Key"
    );
    expect(nameItemString(TOOL_STORAGE_UNIT_ITEM, "craft-name")).toBe(
      "Storage Unit"
    );
  });

  test("'editor-name' formatter", () => {
    expect(nameItem(AK47_STOCK_ITEM, "editor-name")).toEqual(["", "AK-47"]);
    expect(nameItem(AK47_ASIIMOV_ITEM, "editor-name")).toEqual([
      "AK-47",
      "Asiimov"
    ]);
    expect(nameItem(KARAMBIT_VANILLA_ITEM, "editor-name")).toEqual([
      "",
      "★ Karambit"
    ]);
    expect(nameItem(KARAMBIT_DOOPLER_ITEM, "editor-name")).toEqual([
      "★ Karambit",
      "Doppler"
    ]);
    expect(nameItem(HAND_WRAPS_SLAUGHTER_ITEM, "editor-name")).toEqual([
      "Hand Wraps",
      "Slaughter"
    ]);
    expect(nameItem(STICKER_ENCE_RIO_2022_ITEM, "editor-name")).toEqual([
      "Sticker",
      "ENCE | Rio 2022"
    ]);
    expect(nameItem(SPECIAL_AGENT_AVA_FBI_ITEM, "editor-name")).toEqual([
      "FBI",
      "Special Agent Ava"
    ]);
    expect(nameItem(PATCH_DRAGON_ITEM, "editor-name")).toEqual([
      "Patch",
      "Dragon"
    ]);
    expect(nameItem(MUSIC_KIT_DESERT_FIRE_ITEM, "editor-name")).toEqual([
      "Music Kit",
      "Austin Wintory, Desert Fire"
    ]);
    expect(nameItem(GRAFFITI_EZ_ITEM, "editor-name")).toEqual([
      "Graffiti",
      "EZ"
    ]);
    expect(nameItem(COLLECTIBLE_ALYX_PIN_ITEM, "editor-name")).toEqual([
      "",
      "Alyx Pin"
    ]);
    expect(nameItem(CONTAINER_KILOWATT_CASE_ITEM, "editor-name")).toEqual([
      "",
      "Kilowatt Case"
    ]);
    expect(nameItem(KEY_KILOWATT_CASE_KEY_ITEM, "editor-name")).toEqual([
      "",
      "Kilowatt Case Key"
    ]);
    expect(nameItem(TOOL_STORAGE_UNIT_ITEM, "editor-name")).toEqual([
      "",
      "Storage Unit"
    ]);
  });

  test("'inventory-name' formatter", () => {
    expect(nameItem(AK47_STOCK_ITEM, "inventory-name")).toEqual(["AK-47", ""]);
    expect(nameItem(nametag(AK47_STOCK_ITEM), "inventory-name")).toEqual([
      "",
      '"CustomName"'
    ]);
    expect(nameItem(AK47_ASIIMOV_ITEM, "inventory-name")).toEqual([
      "AK-47",
      "Asiimov"
    ]);
    expect(nameItem(nametag(AK47_ASIIMOV_ITEM), "inventory-name")).toEqual([
      "",
      '"CustomName"'
    ]);
    expect(nameItem(stattrak(AK47_ASIIMOV_ITEM), "inventory-name")).toEqual([
      "StatTrak™ AK-47",
      "Asiimov"
    ]);
    expect(
      nameItem(stattrakAndNametag(AK47_ASIIMOV_ITEM), "inventory-name")
    ).toEqual(["", '"CustomName"']);
    expect(nameItem(KARAMBIT_VANILLA_ITEM, "inventory-name")).toEqual([
      "★ Karambit",
      ""
    ]);
    expect(nameItem(stattrak(KARAMBIT_VANILLA_ITEM), "inventory-name")).toEqual(
      ["★ StatTrak™ Karambit", ""]
    );
    expect(nameItem(nametag(KARAMBIT_VANILLA_ITEM), "inventory-name")).toEqual([
      "",
      '"CustomName"'
    ]);
    expect(
      nameItem(stattrakAndNametag(KARAMBIT_VANILLA_ITEM), "inventory-name")
    ).toEqual(["", '"CustomName"']);
    expect(nameItem(KARAMBIT_DOOPLER_ITEM, "inventory-name")).toEqual([
      "★ Karambit",
      "Doppler"
    ]);
    expect(nameItem(stattrak(KARAMBIT_DOOPLER_ITEM), "inventory-name")).toEqual(
      ["★ StatTrak™ Karambit", "Doppler"]
    );
    expect(nameItem(nametag(KARAMBIT_DOOPLER_ITEM), "inventory-name")).toEqual([
      "",
      '"CustomName"'
    ]);
    expect(
      nameItem(stattrakAndNametag(KARAMBIT_DOOPLER_ITEM), "inventory-name")
    ).toEqual(["", '"CustomName"']);
    expect(nameItem(HAND_WRAPS_SLAUGHTER_ITEM, "inventory-name")).toEqual([
      "Hand Wraps",
      "Slaughter"
    ]);
    expect(nameItem(STICKER_ENCE_RIO_2022_ITEM, "inventory-name")).toEqual([
      "Sticker",
      "ENCE | Rio 2022"
    ]);
    expect(nameItem(SPECIAL_AGENT_AVA_FBI_ITEM, "inventory-name")).toEqual([
      "Special Agent Ava",
      "FBI"
    ]);
    expect(nameItem(PATCH_DRAGON_ITEM, "inventory-name")).toEqual([
      "Patch",
      "Dragon"
    ]);
    expect(nameItem(MUSIC_KIT_DESERT_FIRE_ITEM, "inventory-name")).toEqual([
      "Music Kit",
      "Austin Wintory, Desert Fire"
    ]);
    expect(nameItem(GRAFFITI_EZ_ITEM, "inventory-name")).toEqual([
      "Graffiti",
      "EZ"
    ]);
    expect(nameItem(COLLECTIBLE_ALYX_PIN_ITEM, "inventory-name")).toEqual([
      "Alyx Pin",
      ""
    ]);
    expect(nameItem(CONTAINER_KILOWATT_CASE_ITEM, "inventory-name")).toEqual([
      "Kilowatt Case",
      ""
    ]);
    expect(nameItem(KEY_KILOWATT_CASE_KEY_ITEM, "inventory-name")).toEqual([
      "Kilowatt Case Key",
      ""
    ]);
    expect(nameItem(TOOL_STORAGE_UNIT_ITEM, "inventory-name")).toEqual([
      "Storage Unit",
      ""
    ]);
    expect(nameItem(nametag(TOOL_STORAGE_UNIT_ITEM), "inventory-name")).toEqual(
      ["Storage Unit", '"CustomName"']
    );
  });
});
