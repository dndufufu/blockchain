package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dndufufu/blockchain/x/blockchain/types"
	"strconv"
)

// GetCohortCount get the total number of cohort
func (k Keeper) GetCohortCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortCountKey))
	byteKey := types.KeyPrefix(types.CohortCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetCohortCount set the total number of cohort
func (k Keeper) SetCohortCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortCountKey))
	byteKey := types.KeyPrefix(types.CohortCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCohort appends a cohort in the store with a new id and update the count
func (k Keeper) AppendCohort(
	ctx sdk.Context,
	creator string,
	name string,
	operation string,
) uint64 {
	// Create the cohort
	count := k.GetCohortCount(ctx)
	var cohort = types.Cohort{
		Creator:   creator,
		Id:        count,
		Name:      name,
		Operation: operation,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	value := k.cdc.MustMarshalBinaryBare(&cohort)
	store.Set(GetCohortIDBytes(cohort.Id), value)

	// Update cohort count
	k.SetCohortCount(ctx, count+1)

	return count
}

// SetCohort set a specific cohort in the store
func (k Keeper) SetCohort(ctx sdk.Context, cohort types.Cohort) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	b := k.cdc.MustMarshalBinaryBare(&cohort)
	store.Set(GetCohortIDBytes(cohort.Id), b)
}

// GetCohort returns a cohort from its id
func (k Keeper) GetCohort(ctx sdk.Context, id uint64) types.Cohort {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	var cohort types.Cohort
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCohortIDBytes(id)), &cohort)
	return cohort
}

// HasCohort checks if the cohort exists in the store
func (k Keeper) HasCohort(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	return store.Has(GetCohortIDBytes(id))
}

// GetCohortOwner returns the creator of the cohort
func (k Keeper) GetCohortOwner(ctx sdk.Context, id uint64) string {
	return k.GetCohort(ctx, id).Creator
}

// RemoveCohort removes a cohort from the store
func (k Keeper) RemoveCohort(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	store.Delete(GetCohortIDBytes(id))
}

// GetAllCohort returns all cohort
func (k Keeper) GetAllCohort(ctx sdk.Context) (list []types.Cohort) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CohortKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Cohort
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCohortIDBytes returns the byte representation of the ID
func GetCohortIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCohortIDFromBytes returns ID in uint64 format from a byte array
func GetCohortIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
