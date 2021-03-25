package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/dndufufu/blockchain/x/blockchain/types"
)

func (k msgServer) CreateCohort(goCtx context.Context, msg *types.MsgCreateCohort) (*types.MsgCreateCohortResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendCohort(
		ctx,
		msg.Creator,
		msg.Name,
		msg.Operation,
	)

	return &types.MsgCreateCohortResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCohort(goCtx context.Context, msg *types.MsgUpdateCohort) (*types.MsgUpdateCohortResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cohort = types.Cohort{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Name:      msg.Name,
		Operation: msg.Operation,
	}

	// Checks that the element exists
	if !k.HasCohort(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCohortOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCohort(ctx, cohort)

	return &types.MsgUpdateCohortResponse{}, nil
}

func (k msgServer) DeleteCohort(goCtx context.Context, msg *types.MsgDeleteCohort) (*types.MsgDeleteCohortResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCohort(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCohortOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCohort(ctx, msg.Id)

	return &types.MsgDeleteCohortResponse{}, nil
}
