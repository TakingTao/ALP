sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/type/String'
], function(Controller, TypeString) {
	"use strict";

	return Controller.extend("z_f4.controller.Home", {
		onInit: function() {
			this._materialMultiInput = this.byId("materialMultiInput");
		},

		onValueHelp: function() {
			this._oDialog = this.getView().byId("dialog");
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment(this.getView().getId(), "z_f4.view.MaterialF4Dialog", this);
				this.getView().addDependent(this._oDialog);
				this._oDialog.setRangeKeyFields([{
					label:"Matnr",
					key: "Material",
					typeInstance: new TypeString()
				}]);
			}
			this._oDialog.open();
		},

		onValueHelpOkPress: function(oEvent) {
			var aTokens = oEvent.getParameter("tokens");
			this._materialMultiInput.setTokens(aTokens);
			this._oDialog.close();
		},

		onValueHelpCancelPress: function() {
			this._oDialog.close();
		},

		onValueHelpAfterClose: function() {
			this._oDialog.destroy();
		}
	});
});