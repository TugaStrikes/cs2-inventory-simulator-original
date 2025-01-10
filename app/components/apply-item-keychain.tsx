/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {createPortal} from "react-dom";
import {ClientOnly} from "remix-utils/client-only";
import {useInventoryItem} from "~/components/hooks/use-inventory-item";
import {useNameItemString} from "~/components/hooks/use-name-item";
import {useSync} from "~/components/hooks/use-sync";
import {SyncAction} from "~/data/sync";
import {playSound} from "~/utils/sound";
import {useInventory, useLocalize} from "./app-context";
import {ItemImage} from "./item-image";
import {ModalButton} from "./modal-button";
import {UseItemFooter} from "./use-item-footer";
import {UseItemHeader} from "./use-item-header";
import {CS2Economy} from "@driscode/cs2-lib";

export function ApplyItemKeychain({
                                      onClose,
                                      targetUid,
                                      keychainUid
                                  }: {
    onClose: () => void;
    targetUid: number;
    keychainUid: number;
}) {
    const [inventory, setInventory] = useInventory();
    const localize = useLocalize();
    const sync = useSync();
    const nameItemString = useNameItemString();

    const [slot, setSlot] = useState<number>(0);
    const keychainItem = useInventoryItem(keychainUid);
    const targetItem = useInventoryItem(targetUid);

    function handleApplyKeychain() {
        sync({
            type: SyncAction.ApplyItemKeychain,
            keychainUid,
            targetUid
        });
        setInventory(inventory.applyItemKeychain(targetUid, keychainUid, {x: 0, y: 0, z: 0}));
        playSound("inventory_new_item_accept");
        onClose();
    }

    return (
        <ClientOnly
            children={() =>
                createPortal(
                    <div
                        className="fixed left-0 top-0 z-50 flex h-full w-full select-none items-center justify-center bg-black/60 backdrop-blur-sm">
                        <div>
                            <UseItemHeader
                                actionDesc={localize("ApplyStickerUseOn")}
                                actionItem={nameItemString(targetItem)}
                                title={localize("ApplyKeychainUse")}
                                warning={localize("ApplyKeychainWarn")}
                            />
                            <ItemImage
                                className="m-auto aspect-[1.33333] max-w-[512px]"
                                item={targetItem}
                            />
                            <div className="flex items-center justify-center">
                                {slot !== 0 ?
                                    (
                                        <ItemImage
                                            className="h-[126px] w-[168px]"
                                            item={
                                                keychainItem.id !== undefined
                                                    ? CS2Economy.getById(keychainItem.id)
                                                    : keychainItem
                                            }
                                        />
                                    ) : (
                                        <button
                                            className="group flex h-[126px] w-[168px] items-center justify-center"
                                            onClick={() => {
                                                setSlot(1)
                                                playSound("buttonclick");
                                            }}
                                        >
                                            <div
                                                className="rounded-md border-2 border-white/20 p-4 px-6 transition group-hover:border-white/80">
                                                <FontAwesomeIcon className="h-4" icon={faPlus}/>
                                            </div>
                                        </button>
                                    )}
                            </div>
                            <UseItemFooter
                                right={
                                    <>
                                        <ModalButton
                                            children={localize("ApplyKeychainUse")}
                                            onClick={handleApplyKeychain}
                                            variant="primary"
                                        />
                                        <ModalButton
                                            children={localize("ApplyStickerCancel")}
                                            onClick={onClose}
                                            variant="secondary"
                                        />
                                    </>
                                }
                            />
                        </div>
                    </div>,
                    document.body
                )
            }
        />
    );
}
