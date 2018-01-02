
module.exports = {

	// pulls just the code-ish things
	getCode: () => {
	return `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<name>ApexClass</name>
		<members>*</members>
	</types>
	<types>
		<name>ApexTrigger</name>
		<members>*</members>
	</types>
	<types>
		<members>*</members>
		<name>ApexComponent</name>
	</types>
	<types>
		<members>*</members>
		<name>ApexPage</name>
	</types>
	<types>
		<members>*</members>
		<name>AuraDefinitionBundle</name>
	</types>
	<types>
		<members>*</members>
		<name>StaticResource</name>
	</types>
	<version>41.0</version>
</Package>`;
	},

	// tries to get everything
	getAll: () => {
		return `<? xml version = "1.0" encoding = "UTF-8" ?>
	<Package xmlns="http://soap.sforce.com/2006/04/metadata">
		<!-- Updated 12 Feb 2017 for API 39 -->
    <types>
			<members>*</members>
			<name>AccountCriteriaBasedSharingRule</name>
		</types>
		<types>
			<members>*</members>
			<name>AccountOwnerSharingRule</name>
		</types>
		<types>
			<members>*</members>
			<name>AnalyticSnapshot</name>
		</types>
		<types>
			<members>*</members>
			<name>ApexClass</name>
		</types>
		<types>
			<members>*</members>
			<name>ApexComponent</name>
		</types>
		<types>
			<members>*</members>
			<name>ApexPage</name>
		</types>
		<types>
			<members>*</members>
			<name>ApexTrigger</name>
		</types>
		<types>
			<members>*</members>
			<name>ApprovalProcess</name>
		</types>
		<types>
			<members>*</members>
			<name>AppMenu</name>
		</types>
		<types>
			<members>*</members>
			<name>AssignmentRules</name>
		</types>
		<types>
			<members>*</members>
			<name>AuraDefinitionBundle</name>
		</types>
		<types>
			<members>*</members>
			<name>AuthProvider</name>
		</types>
		<types>
			<members>*</members>
			<name>AutoResponseRules</name>
		</types>
		<types>
			<members>*</members>
			<name>Certificate</name>
		</types>
		<types>
			<members>*</members>
			<name>CleanDataService</name>
		</types>
		<types>
			<members>*</members>
			<name>Community</name>
		</types>
		<types>
			<members>*</members>
			<name>CompactLayout</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomApplication</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomApplicationComponent</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomField</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomLabels</name>
		</types>
		<types>
			<members>*</members>
			<members>Account</members>
			<members>AccountContactRelation</members>
			<members>AccountContactRole</members>
			<members>Activity</members>
			<members>Asset</members>
			<members>AssistantProgress</members>
			<members>Campaign</members>
			<members>CampaignMember</members>
			<members>Case</members>
			<members>CaseContactRole</members>
			<members>Contact</members>
			<members>ContentVersion</members>
			<members>Contract</members>
			<members>ContractContactRole</members>
			<members>DuplicateRecordItem</members>
			<members>DuplicateRecordSet</members>
			<members>EmailMessage</members>
			<members>Event</members>
			<members>ExchangeUserMapping</members>
			<members>FeedItem</members>
			<members>Idea</members>
			<members>Lead</members>
			<members>LinkedArticle</members>
			<members>Macro</members>
			<members>MacroAction</members>
			<members>MacroInstruction</members>
			<members>Opportunity</members>
			<members>OpportunityCompetitor</members>
			<members>OpportunityContactRole</members>
			<members>OpportunityLineItem</members>
			<members>Order</members>
			<members>OrderItem</members>
			<members>PartnerRole</members>
			<members>Pricebook2</members>
			<members>PricebookEntry</members>
			<members>Product2</members>
			<members>ProfileSkill</members>
			<members>ProfileSkillEndorsement</members>
			<members>ProfileSkillUser</members>
			<members>Quote</members>
			<members>QuoteLineItem</members>
			<members>Site</members>
			<members>SocialPersona</members>
			<members>Solution</members>
			<members>StreamingChannel</members>
			<members>Task</members>
			<members>Territory</members>
			<members>User</members>
			<members>WorkBadge</members>
			<members>WorkBadgeDefinition</members>
			<members>WorkThanks</members>
			<name>CustomObject</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomMetadata</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomObjectTranslation</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomPageWebLink</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomPermission</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomSite</name>
		</types>
		<types>
			<members>*</members>
			<name>CustomTab</name>
		</types>
		<types>
			<members>*</members>
			<name>DelegateGroup</name>
		</types>
		<types>
			<members>*</members>
			<name>DuplicateRule</name>
		</types>
		<types>
			<members>*</members>
			<name>EscalationRules</name>
		</types>
		<types>
			<members>*</members>
			<name>Flow</name>
		</types>
		<types>
			<members>*</members>
			<name>FlowDefinition</name>
		</types>
		<!-- Not avaliable since API 38
    <types>
			<members>*</members>
			<name>GlobalPicklist</name>
		</types> -->
    <types>
			<members>*</members>
			<name>GlobalValueSet</name>
		</types>
		<types>
			<members>*</members>
			<name>GlobalValueSetTranslation</name>
		</types>
		<types>
			<members>*</members>
			<name>Group</name>
		</types>
		<types>
			<members>*</members>
			<name>HomePageComponent</name>
		</types>
		<types>
			<members>*</members>
			<name>HomePageLayout</name>
		</types>
		<types>
			<members>*</members>
			<name>Layout</name>
		</types>
		<types>
			<members>*</members>
			<name>Letterhead</name>
		</types>
		<types>
			<members>*</members>
			<name>ListView</name>
		</types>
		<types>
			<members>*</members>
			<name>ManagedTopics</name>
		</types>
		<types>
			<members>*</members>
			<name>MatchingRule</name>
		</types>
		<types>
			<members>*</members>
			<name>MatchingRules</name>
		</types>
		<types>
			<members>*</members>
			<name>Network</name>
		</types>
		<types>
			<members>*</members>
			<name>PathAssistant</name>
		</types>
		<types>
			<members>*</members>
			<name>PermissionSet</name>
		</types>
		<types>
			<members>*</members>
			<name>Profile</name>
		</types>
		<types>
			<members>*</members>
			<name>Queue</name>
		</types>
		<types>
			<members>*</members>
			<name>QuickAction</name>
		</types>
		<types>
			<members>*</members>
			<name>RecordType</name>
		</types>
		<types>
			<members>*</members>
			<name>RemoteSiteSetting</name>
		</types>
		<types>
			<members>*</members>
			<name>ReportType</name>
		</types>
		<types>
			<members>*</members>
			<name>Role</name>
		</types>
		<types>
			<members>*</members>
			<name>SharingRules</name>
		</types>
		<types>
			<members>*</members>
			<name>SharingCriteriaRule</name>
		</types>
		<types>
			<members>*</members>
			<name>SharingOwnerRule</name>
		</types>
		<types>
			<members>*</members>
			<name>SharingTerritoryRule</name>
		</types>
		<types>
			<members>*</members>
			<name>SiteDotCom</name>
		</types>
		<types>
			<members>*</members>
			<name>StandardValueSetTranslation</name>
		</types>
		<types>
			<members>*</members>
			<name>StaticResource</name>
		</types>
		<types>
			<members>*</members>
			<name>Territory</name>
		</types>
		<types>
			<members>*</members>
			<name>Translations</name>
		</types>
		<types>
			<members>*</members>
			<name>ValidationRule</name>
		</types>
		<types>
			<members>*</members>
			<name>WebLink</name>
		</types>
		<types>
			<members>*</members>
			<name>Workflow</name>
		</types>
		<types>
			<members>*</members>
			<name>WorkflowAlert</name>
		</types>
		<types>
			<members>*</members>
			<name>WorkflowFieldUpdate</name>
		</types>
		<types>
			<members>*</members>
			<name>WorkflowRule</name>
		</types>
		<types>
			<members>*</members>
			<name>Settings</name>
		</types>
		<version>41.0</version>
	</Package>`;
	}


};