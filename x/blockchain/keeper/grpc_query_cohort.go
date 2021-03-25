package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/dndufufu/blockchain/x/blockchain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CohortAll(c context.Context, req *types.QueryAllCohortRequest) (*types.QueryAllCohortResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cohorts []*types.Cohort
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cohortStore := prefix.NewStore(store, types.KeyPrefix(types.CohortKey))

	pageRes, err := query.Paginate(cohortStore, req.Pagination, func(key []byte, value []byte) error {
		var cohort types.Cohort
		if err := k.cdc.UnmarshalBinaryBare(value, &cohort); err != nil {
			return err
		}

		cohorts = append(cohorts, &cohort)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCohortResponse{Cohort: cohorts, Pagination: pageRes}, nil
}

func (k Keeper) Cohort(c context.Context, req *types.QueryGetCohortRequest) (*types.QueryGetCohortResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cohort types.Cohort
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasCohort(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCohortIDBytes(req.Id)), &cohort)

	return &types.QueryGetCohortResponse{Cohort: &cohort}, nil
}
