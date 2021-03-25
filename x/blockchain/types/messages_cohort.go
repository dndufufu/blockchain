package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCohort{}

func NewMsgCreateCohort(creator string, name string, operation string) *MsgCreateCohort {
	return &MsgCreateCohort{
		Creator:   creator,
		Name:      name,
		Operation: operation,
	}
}

func (msg *MsgCreateCohort) Route() string {
	return RouterKey
}

func (msg *MsgCreateCohort) Type() string {
	return "CreateCohort"
}

func (msg *MsgCreateCohort) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCohort) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCohort) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCohort{}

func NewMsgUpdateCohort(creator string, id uint64, name string, operation string) *MsgUpdateCohort {
	return &MsgUpdateCohort{
		Id:        id,
		Creator:   creator,
		Name:      name,
		Operation: operation,
	}
}

func (msg *MsgUpdateCohort) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCohort) Type() string {
	return "UpdateCohort"
}

func (msg *MsgUpdateCohort) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCohort) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCohort) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateCohort{}

func NewMsgDeleteCohort(creator string, id uint64) *MsgDeleteCohort {
	return &MsgDeleteCohort{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCohort) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCohort) Type() string {
	return "DeleteCohort"
}

func (msg *MsgDeleteCohort) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCohort) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCohort) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
