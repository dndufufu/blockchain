package blockchain

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dndufufu/blockchain/x/blockchain/keeper"
	"github.com/dndufufu/blockchain/x/blockchain/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the cohort
	for _, elem := range genState.CohortList {
		k.SetCohort(ctx, *elem)
	}

	// Set cohort count
	k.SetCohortCount(ctx, uint64(len(genState.CohortList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all cohort
	cohortList := k.GetAllCohort(ctx)
	for _, elem := range cohortList {
		elem := elem
		genesis.CohortList = append(genesis.CohortList, &elem)
	}

	return genesis
}
