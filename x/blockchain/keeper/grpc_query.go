package keeper

import (
	"github.com/dndufufu/blockchain/x/blockchain/types"
)

var _ types.QueryServer = Keeper{}
