/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CS_Item, CS_hasNametag } from "@ianlucas/cslib";
import { useState } from "react";
import { useItemSelectorContext } from "~/components/item-selector-context";
import { useRootContext } from "~/components/root-context";

export function useRenameItem() {
  const { items, nametagDefaultAllowed } = useRootContext();
  const { itemSelector, setItemSelector } = useItemSelectorContext();
  const [renameItem, setRenameItem] = useState<{
    toolUid: number;
    targetItem: CS_Item;
    targetUid: number;
  }>();

  function handleRenameItem(uid: number) {
    return setItemSelector({
      uid,
      items: items.filter(
        ({ item }) =>
          CS_hasNametag(item) &&
          (!item.free ||
            nametagDefaultAllowed.length === 0 ||
            nametagDefaultAllowed.includes(item.id))
      ),
      type: "rename-item"
    });
  }

  function handleRenameItemSelect(uid: number, item: CS_Item) {
    return setRenameItem({
      targetUid: uid,
      targetItem: item,
      toolUid: itemSelector!.uid
    });
  }

  function closeRenameItem() {
    return setRenameItem(undefined);
  }

  function isRenamingItem(
    state: typeof renameItem
  ): state is NonNullable<typeof renameItem> {
    return state !== undefined;
  }

  return {
    closeRenameItem,
    handleRenameItem,
    handleRenameItemSelect,
    isRenamingItem,
    renameItem
  };
}
