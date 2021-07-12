package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/dndufufu/blockchain/x/blockchain/types"
)

// add comment
func CmdCreateCohort() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cohort [name] [operation]",
		Short: "Creates a new cohort",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName := string(args[0])
			argsOperation := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCohort(clientCtx.GetFromAddress().String(), string(argsName), string(argsOperation))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

// add comment 2
func CmdUpdateCohort() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cohort [id] [name] [operation]",
		Short: "Update a cohort",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName := string(args[1])
			argsOperation := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCohort(clientCtx.GetFromAddress().String(), id, string(argsName), string(argsOperation))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCohort() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cohort [id] [name] [operation]",
		Short: "Delete a cohort by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCohort(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
