/**
 * Permission indexes categorized by role domain/permission domain/category.
 */
export namespace SkyAuthPermissions {

  /**
   * Permission domains for the Analysis role domain.
   */
  export namespace Analysis {

    /**
     * Categories for the Financial permission domain.
     */
    export namespace Financial {

      /**
       *  Permissions categorized under Dashboards in the Financial permission domain.
       */
      export const enum Dashboards {

        /**
         * The View permission in the Dashboards category.
         */
        View = 12,

        /**
         * The Add/Edit permission in the Dashboards category.
         */
        AddEdit = 13,

        /**
         * The Delete permission in the Dashboards category.
         */
        Delete = 14
      }

      /**
       *  Permissions categorized under Insights in the Financial permission domain.
       */
      export const enum Insights {

        /**
         * The Add/Edit permission in the Insights category.
         */
        AddEdit = 10,

        /**
         * The Delete permission in the Insights category.
         */
        Delete = 11
      }

    }

  }

  export namespace Analysis {

    /**
     * Categories for the Fundraising permission domain.
     */
    export namespace Fundraising {

      /**
       *  Permissions categorized under Insights in the Fundraising permission domain.
       */
      export const enum Insights {

        /**
         * The Add/Edit permission in the Insights category.
         */
        AddEdit = 5,

        /**
         * The Delete permission in the Insights category.
         */
        Delete = 6
      }

      /**
       *  Permissions categorized under Dashboards in the Fundraising permission domain.
       */
      export const enum Dashboards {

        /**
         * The View permission in the Dashboards category.
         */
        View = 7,

        /**
         * The Add/Edit permission in the Dashboards category.
         */
        AddEdit = 8,

        /**
         * The Delete permission in the Dashboards category.
         */
        Delete = 9
      }

    }

  }

  /**
   * Permission domains for the Administration role domain.
   */
  export namespace Administration {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 15,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 16,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 17
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 18,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 19,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 20,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 21
      }

    }

  }

  /**
   * Permission domains for the Marketing role domain.
   */
  export namespace Marketing {

    /**
     * Categories for the Email permission domain.
     */
    export namespace Email {

      /**
       *  Permissions categorized under Email in the Email permission domain.
       */
      export const enum Email {

        /**
         * The Access permission in the Email category.
         */
        Access = 4
      }

    }

  }

  /**
   * Permission domains for the Employee giving administration role domain.
   */
  export namespace Employeegivingadministration {

    /**
     * Categories for the Administration permission domain.
     */
    export namespace Administration {

      /**
       *  Permissions categorized under Giving settings in the Administration permission domain.
       */
      export const enum Givingsettings {

        /**
         * The Manage permission in the Giving settings category.
         */
        Manage = 23
      }

      /**
       *  Permissions categorized under Donations in the Administration permission domain.
       */
      export const enum Donations {

        /**
         * The Manage permission in the Donations category.
         */
        Manage = 24
      }

      /**
       *  Permissions categorized under Matches in the Administration permission domain.
       */
      export const enum Matches {

        /**
         * The Manage permission in the Matches category.
         */
        Manage = 25
      }

    }

  }

  /**
   * Permission domains for the Employee giving home role domain.
   */
  export namespace Employeegivinghome {

    /**
     * Categories for the Home permission domain.
     */
    export namespace Home {

      /**
       *  Permissions categorized under Donations in the Home permission domain.
       */
      export const enum Donations {

        /**
         * The Make permission in the Donations category.
         */
        Make = 26
      }

    }

  }

  /**
   * Permission domains for the Events role domain.
   */
  export namespace Events {

    /**
     * Categories for the Auctions permission domain.
     */
    export namespace Auctions {

      /**
       *  Permissions categorized under Auctions in the Auctions permission domain.
       */
      export const enum Auctions {

        /**
         * The Manage permission in the Auctions category.
         */
        Manage = 28
      }

    }

  }

  /**
   * Permission domains for the General ledger role domain.
   */
  export namespace Generalledger {

    /**
     * Categories for the Statistical units permission domain.
     */
    export namespace Statisticalunits {

      /**
       *  Permissions categorized under Unit types in the Statistical units permission domain.
       */
      export const enum Unittypes {

        /**
         * The View permission in the Unit types category.
         */
        View = 29,

        /**
         * The Add permission in the Unit types category.
         */
        Add = 30,

        /**
         * The Edit permission in the Unit types category.
         */
        Edit = 31
      }

      /**
       *  Permissions categorized under Unit counts in the Statistical units permission domain.
       */
      export const enum Unitcounts {

        /**
         * The View permission in the Unit counts category.
         */
        View = 32,

        /**
         * The Add permission in the Unit counts category.
         */
        Add = 33,

        /**
         * The Edit permission in the Unit counts category.
         */
        Edit = 34,

        /**
         * The Delete permission in the Unit counts category.
         */
        Delete = 35
      }

    }

  }

  /**
   * Permission domains for the Grantmaking role domain.
   */
  export namespace Grantmaking {

    /**
     * Categories for the Contact permission domain.
     */
    export namespace Contact {

      /**
       *  Permissions categorized under Contacts in the Contact permission domain.
       */
      export const enum Contacts {

        /**
         * The View permission in the Contacts category.
         */
        View = 36,

        /**
         * The Add\Edit permission in the Contacts category.
         */
        AddEdit = 37
      }

    }

  }

  export namespace Grantmaking {

    /**
     * Categories for the Grant permission domain.
     */
    export namespace Grant {

      /**
       *  Permissions categorized under Grants in the Grant permission domain.
       */
      export const enum Grants {

        /**
         * The View permission in the Grants category.
         */
        View = 22,

        /**
         * The Edit permission in the Grants category.
         */
        Edit = 38,

        /**
         * The Approve permission in the Grants category.
         */
        Approve = 39,

        /**
         * The Decline permission in the Grants category.
         */
        Decline = 40,

        /**
         * The Revert to pending permission in the Grants category.
         */
        Reverttopending = 41
      }

    }

  }

  export namespace Grantmaking {

    /**
     * Categories for the Organization permission domain.
     */
    export namespace Organization {

      /**
       *  Permissions categorized under Organizations in the Organization permission domain.
       */
      export const enum Organizations {

        /**
         * The View permission in the Organizations category.
         */
        View = 42,

        /**
         * The Add\Edit permission in the Organizations category.
         */
        AddEdit = 43
      }

    }

  }

  /**
   * Permission domains for the Tools role domain.
   */
  export namespace Tools {

    /**
     * Categories for the Data Health permission domain.
     */
    export namespace DataHealth {

      /**
       *  Permissions categorized under Data Health Services in the Data Health permission domain.
       */
      export const enum DataHealthServices {

        /**
         * The View permission in the Data Health Services category.
         */
        View = 27,

        /**
         * The Manage permission in the Data Health Services category.
         */
        Manage = 94
      }

      /**
       *  Permissions categorized under Duplicate Management in the Data Health permission domain.
       */
      export const enum DuplicateManagement {

        /**
         * The View permission in the Duplicate Management category.
         */
        View = 44,

        /**
         * The Manage permission in the Duplicate Management category.
         */
        Manage = 45
      }

    }

  }

  /**
   * Permission domains for the Financial role domain.
   */
  export namespace Financial {

    /**
     * Categories for the Analyze permission domain.
     */
    export namespace Analyze {

      /**
       *  Permissions categorized under Subledger dashboards in the Analyze permission domain.
       */
      export const enum Subledgerdashboards {

        /**
         * The Payables permission in the Subledger dashboards category.
         */
        Payables = 55,

        /**
         * The Receivables permission in the Subledger dashboards category.
         */
        Receivables = 56,

        /**
         * The Development permission in the Subledger dashboards category.
         */
        Development = 62
      }

      /**
       *  Permissions categorized under General ledger dashboards in the Analyze permission domain.
       */
      export const enum Generalledgerdashboards {

        /**
         * The Accounts permission in the General ledger dashboards category.
         */
        Accounts = 46,

        /**
         * The Net assets permission in the General ledger dashboards category.
         */
        Netassets = 47,

        /**
         * The Projects permission in the General ledger dashboards category.
         */
        Projects = 48,

        /**
         * The Project income and expenses permission in the General ledger dashboards category.
         */
        Projectincomeandexpenses = 49,

        /**
         * The Transaction code 1 permission in the General ledger dashboards category.
         */
        Transactioncode1 = 50,

        /**
         * The Transaction code 2 permission in the General ledger dashboards category.
         */
        Transactioncode2 = 51,

        /**
         * The Transaction code 3 permission in the General ledger dashboards category.
         */
        Transactioncode3 = 52,

        /**
         * The Transaction code 4 permission in the General ledger dashboards category.
         */
        Transactioncode4 = 53,

        /**
         * The Transaction code 5 permission in the General ledger dashboards category.
         */
        Transactioncode5 = 54
      }

      /**
       *  Permissions categorized under Management dashboards in the Analyze permission domain.
       */
      export const enum Managementdashboards {

        /**
         * The History of changes permission in the Management dashboards category.
         */
        Historyofchanges = 57,

        /**
         * The Metrics permission in the Management dashboards category.
         */
        Metrics = 58
      }

    }

  }

  /**
   * Permission domains for the Fundraising role domain.
   */
  export namespace Fundraising {

    /**
     * Categories for the Workflow designer permission domain.
     */
    export namespace Workflowdesigner {

      /**
       *  Permissions categorized under Action workflows in the Workflow designer permission domain.
       */
      export const enum Actionworkflows {

        /**
         * The Apply permission in the Action workflows category.
         */
        Apply = 70
      }

      /**
       *  Permissions categorized under Workflows in the Workflow designer permission domain.
       */
      export const enum Workflows {

        /**
         * The View permission in the Workflows category.
         */
        View = 67,

        /**
         * The Add/Edit permission in the Workflows category.
         */
        AddEdit = 68,

        /**
         * The Delete permission in the Workflows category.
         */
        Delete = 69
      }

    }

  }

  export namespace Events {

    /**
     * Categories for the Event management permission domain.
     */
    export namespace Eventmanagement {

      /**
       *  Permissions categorized under Events in the Event management permission domain.
       */
      export const enum Events {

        /**
         * The View permission in the Events category.
         */
        View = 77,

        /**
         * The Add permission in the Events category.
         */
        Add = 78,

        /**
         * The Edit permission in the Events category.
         */
        Edit = 79
      }

      /**
       *  Permissions categorized under Participants in the Event management permission domain.
       */
      export const enum Participants {

        /**
         * The View permission in the Participants category.
         */
        View = 80,

        /**
         * The Add permission in the Participants category.
         */
        Add = 81,

        /**
         * The Edit permission in the Participants category.
         */
        Edit = 82
      }

    }

  }

  export namespace Marketing {

    /**
     * Categories for the Social permission domain.
     */
    export namespace Social {

      /**
       *  Permissions categorized under Social Accounts in the Social permission domain.
       */
      export const enum SocialAccounts {

        /**
         * The Connect permission in the Social Accounts category.
         */
        Connect = 92
      }

      /**
       *  Permissions categorized under Social Posts in the Social permission domain.
       */
      export const enum SocialPosts {

        /**
         * The Create permission in the Social Posts category.
         */
        Create = 88,

        /**
         * The Edit permission in the Social Posts category.
         */
        Edit = 89,

        /**
         * The Delete permission in the Social Posts category.
         */
        Delete = 90,

        /**
         * The Send permission in the Social Posts category.
         */
        Send = 91
      }

    }

  }

  export namespace Fundraising {

    /**
     * Categories for the Analyze permission domain.
     */
    export namespace Analyze {

      /**
       *  Permissions categorized under Campaigns in the Analyze permission domain.
       */
      export const enum Campaigns {

        /**
         * The View permission in the Campaigns category.
         */
        View = 104
      }

      /**
       *  Permissions categorized under Acquisition in the Analyze permission domain.
       */
      export const enum Acquisition {

        /**
         * The View permission in the Acquisition category.
         */
        View = 108
      }

      /**
       *  Permissions categorized under Actions in the Analyze permission domain.
       */
      export const enum Actions {

        /**
         * The View permission in the Actions category.
         */
        View = 110
      }

      /**
       *  Permissions categorized under Funds in the Analyze permission domain.
       */
      export const enum Funds {

        /**
         * The View permission in the Funds category.
         */
        View = 105
      }

      /**
       *  Permissions categorized under Appeals in the Analyze permission domain.
       */
      export const enum Appeals {

        /**
         * The View permission in the Appeals category.
         */
        View = 106
      }

      /**
       *  Permissions categorized under Overview in the Analyze permission domain.
       */
      export const enum Overview {

        /**
         * The View permission in the Overview category.
         */
        View = 103
      }

      /**
       *  Permissions categorized under Recapture in the Analyze permission domain.
       */
      export const enum Recapture {

        /**
         * The View permission in the Recapture category.
         */
        View = 109
      }

      /**
       *  Permissions categorized under Retention in the Analyze permission domain.
       */
      export const enum Retention {

        /**
         * The View permission in the Retention category.
         */
        View = 107
      }

      /**
       *  Permissions categorized under Benchmarking in the Analyze permission domain.
       */
      export const enum Benchmarking {

        /**
         * The View permission in the Benchmarking category.
         */
        View = 180
      }

    }

  }

  export namespace Fundraising {

    /**
     * Categories for the Attachment permission domain.
     */
    export namespace Attachment {

      /**
       *  Permissions categorized under Appeal attachments in the Attachment permission domain.
       */
      export const enum Appealattachments {

        /**
         * The View permission in the Appeal attachments category.
         */
        View = 120,

        /**
         * The Add/Edit permission in the Appeal attachments category.
         */
        AddEdit = 121,

        /**
         * The Delete permission in the Appeal attachments category.
         */
        Delete = 122
      }

      /**
       *  Permissions categorized under Fund attachments in the Attachment permission domain.
       */
      export const enum Fundattachments {

        /**
         * The View permission in the Fund attachments category.
         */
        View = 126,

        /**
         * The Add/Edit permission in the Fund attachments category.
         */
        AddEdit = 127,

        /**
         * The Delete permission in the Fund attachments category.
         */
        Delete = 128
      }

      /**
       *  Permissions categorized under Campaign attachments in the Attachment permission domain.
       */
      export const enum Campaignattachments {

        /**
         * The View permission in the Campaign attachments category.
         */
        View = 123,

        /**
         * The Add/Edit permission in the Campaign attachments category.
         */
        AddEdit = 124,

        /**
         * The Delete permission in the Campaign attachments category.
         */
        Delete = 125
      }

    }

  }

  export namespace Fundraising {

    /**
     * Categories for the Opportunities permission domain.
     */
    export namespace Opportunities {

      /**
       *  Permissions categorized under Opportunities tabs in the Opportunities permission domain.
       */
      export const enum Opportunitiestabs {

        /**
         * The Work opportunities permission in the Opportunities tabs category.
         */
        Workopportunities = 132,

        /**
         * The Lists opportunities permission in the Opportunities tabs category.
         */
        Listsopportunities = 133,

        /**
         * The Analyze opportunities permission in the Opportunities tabs category.
         */
        Analyzeopportunities = 134
      }

    }

  }

  export namespace Fundraising {

    /**
     * Categories for the Lists permission domain.
     */
    export namespace Lists {

      /**
       *  Permissions categorized under Actions in the Lists permission domain.
       */
      export const enum Actions {

        /**
         * The View permission in the Actions category.
         */
        View = 139
      }

      /**
       *  Permissions categorized under Constituents in the Lists permission domain.
       */
      export const enum Constituents {

        /**
         * The View permission in the Constituents category.
         */
        View = 140
      }

      /**
       *  Permissions categorized under Export in the Lists permission domain.
       */
      export const enum Export {

        /**
         * The Allow permission in the Export category.
         */
        Allow = 142
      }

      /**
       *  Permissions categorized under Gifts in the Lists permission domain.
       */
      export const enum Gifts {

        /**
         * The View permission in the Gifts category.
         */
        View = 141
      }

    }

  }

  export namespace Fundraising {

    /**
     * Categories for the Work permission domain.
     */
    export namespace Work {

      /**
       *  Permissions categorized under Export in the Work permission domain.
       */
      export const enum Export {

        /**
         * The Allow permission in the Export category.
         */
        Allow = 154
      }

      /**
       *  Permissions categorized under Unassigned in the Work permission domain.
       */
      export const enum Unassigned {

        /**
         * The View permission in the Unassigned category.
         */
        View = 152
      }

      /**
       *  Permissions categorized under Change fundraiser in the Work permission domain.
       */
      export const enum Changefundraiser {

        /**
         * The Allow permission in the Change fundraiser category.
         */
        Allow = 153
      }

      /**
       *  Permissions categorized under Actions in the Work permission domain.
       */
      export const enum Actions {

        /**
         * The View permission in the Actions category.
         */
        View = 151
      }

      /**
       *  Permissions categorized under Portfolio in the Work permission domain.
       */
      export const enum Portfolio {

        /**
         * The View permission in the Portfolio category.
         */
        View = 149
      }

      /**
       *  Permissions categorized under Gifts in the Work permission domain.
       */
      export const enum Gifts {

        /**
         * The View permission in the Gifts category.
         */
        View = 150
      }

    }

  }

  export namespace Grantmaking {

    /**
     * Categories for the Application permission domain.
     */
    export namespace Application {

      /**
       *  Permissions categorized under Applications in the Application permission domain.
       */
      export const enum Applications {

        /**
         * The Consider permission in the Applications category.
         */
        Consider = 156
      }

    }

  }

  /**
   * Permission domains for the Safe Child Check-In role domain.
   */
  export namespace SafeChildCheckIn {

    /**
     * Categories for the Safe Child Check-In permission domain.
     */
    export namespace SafeChildCheckIn {

      /**
       *  Permissions categorized under Operate check-in in the Safe Child Check-In permission domain.
       */
      export const enum Operatecheckin {

        /**
         * The Enable permission in the Operate check-in category.
         */
        Enable = 159
      }

      /**
       *  Permissions categorized under Configure check-in in the Safe Child Check-In permission domain.
       */
      export const enum Configurecheckin {

        /**
         * The Enable permission in the Configure check-in category.
         */
        Enable = 160
      }

    }

  }

  /**
   * Permission domains for the Payments role domain.
   */
  export namespace Payments {

    /**
     * Categories for the SKY API permission domain.
     */
    export namespace SKYAPI {

      /**
       *  Permissions categorized under Endpoint access in the SKY API permission domain.
       */
      export const enum Endpointaccess {

        /**
         * The All permission in the Endpoint access category.
         */
        All = 162
      }

    }

  }

  /**
   * Permission domains for the Church Management role domain.
   */
  export namespace ChurchManagement {

    /**
     * Categories for the Church Management permission domain.
     */
    export namespace ChurchManagement {

      /**
       *  Permissions categorized under Directory in the Church Management permission domain.
       */
      export const enum Directory {

        /**
         * The View permission in the Directory category.
         */
        View = 171,

        /**
         * The Modify permission in the Directory category.
         */
        Modify = 172
      }

      /**
       *  Permissions categorized under Events and Services in the Church Management permission domain.
       */
      export const enum EventsandServices {

        /**
         * The View permission in the Events and Services category.
         */
        View = 173,

        /**
         * The Modify permission in the Events and Services category.
         */
        Modify = 174
      }

      /**
       *  Permissions categorized under Groups in the Church Management permission domain.
       */
      export const enum Groups {

        /**
         * The View permission in the Groups category.
         */
        View = 175,

        /**
         * The Modify permission in the Groups category.
         */
        Modify = 176
      }

      /**
       *  Permissions categorized under Locations in the Church Management permission domain.
       */
      export const enum Locations {

        /**
         * The View permission in the Locations category.
         */
        View = 177,

        /**
         * The Modify permission in the Locations category.
         */
        Modify = 178
      }

    }

  }

  /**
   * Permission domains for the Church Congregant role domain.
   */
  export namespace ChurchCongregant {

    /**
     * Categories for the Church Congregant permission domain.
     */
    export namespace ChurchCongregant {

      /**
       *  Permissions categorized under Small group leader in the Church Congregant permission domain.
       */
      export const enum Smallgroupleader {

        /**
         * The Access permission in the Small group leader category.
         */
        Access = 194
      }

      /**
       *  Permissions categorized under Congregant in the Church Congregant permission domain.
       */
      export const enum Congregant {

        /**
         * The Access permission in the Congregant category.
         */
        Access = 182
      }

    }

  }

  export namespace Generalledger {

    /**
     * Categories for the Allocations permission domain.
     */
    export namespace Allocations {

      /**
       *  Permissions categorized under Allocations in the Allocations permission domain.
       */
      export const enum Allocations {

        /**
         * The View permission in the Allocations category.
         */
        View = 188,

        /**
         * The Add permission in the Allocations category.
         */
        Add = 189,

        /**
         * The Edit permission in the Allocations category.
         */
        Edit = 190,

        /**
         * The Delete permission in the Allocations category.
         */
        Delete = 191,

        /**
         * The Run permission in the Allocations category.
         */
        Run = 192
      }

    }

  }

  export namespace Generalledger {

    /**
     * Categories for the Spending policies permission domain.
     */
    export namespace Spendingpolicies {

      /**
       *  Permissions categorized under Spending policies in the Spending policies permission domain.
       */
      export const enum Spendingpolicies {

        /**
         * The View permission in the Spending policies category.
         */
        View = 201,

        /**
         * The Add permission in the Spending policies category.
         */
        Add = 202,

        /**
         * The Edit permission in the Spending policies category.
         */
        Edit = 203,

        /**
         * The Delete permission in the Spending policies category.
         */
        Delete = 204,

        /**
         * The Calculate permission in the Spending policies category.
         */
        Calculate = 205,

        /**
         * The Adjust amounts permission in the Spending policies category.
         */
        Adjustamounts = 206
      }

    }

  }

  /**
   * Permission domains for the Administration.GRANTMAKING role domain.
   */
  export namespace AdministrationGRANTMAKING {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 214,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 215,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 216
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 217,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 218,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 219,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 220
      }

    }

  }

  /**
   * Permission domains for the Administration.RENXT role domain.
   */
  export namespace AdministrationRENXT {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 228,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 229,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 230
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 231,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 232,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 233,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 234
      }

    }

  }

  /**
   * Permission domains for the Administration.FENXT role domain.
   */
  export namespace AdministrationFENXT {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 242,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 243,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 244
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 245,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 246,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 247,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 248
      }

    }

  }

  /**
   * Permission domains for the Administration.EMPLOYEEGIVING role domain.
   */
  export namespace AdministrationEMPLOYEEGIVING {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 256,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 257,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 258
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 259,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 260,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 261,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 262
      }

    }

  }

  export namespace Grantmaking {

    /**
     * Categories for the Grant payments permission domain.
     */
    export namespace Grantpayments {

      /**
       *  Permissions categorized under Grant payments in the Grant payments permission domain.
       */
      export const enum Grantpayments {

        /**
         * The View permission in the Grant payments category.
         */
        View = 263,

        /**
         * The Add/Edit permission in the Grant payments category.
         */
        AddEdit = 264
      }

    }

  }

  /**
   * Permission domains for the Volunteers role domain.
   */
  export namespace Volunteers {

    /**
     * Categories for the Volunteer management permission domain.
     */
    export namespace Volunteermanagement {

      /**
       *  Permissions categorized under Volunteers in the Volunteer management permission domain.
       */
      export const enum Volunteers {

        /**
         * The View permission in the Volunteers category.
         */
        View = 266
      }

    }

  }

  /**
   * Permission domains for the Volunteers.RENXT role domain.
   */
  export namespace VolunteersRENXT {

    /**
     * Categories for the Volunteer management permission domain.
     */
    export namespace Volunteermanagement {

      /**
       *  Permissions categorized under Volunteers in the Volunteer management permission domain.
       */
      export const enum Volunteers {

        /**
         * The View permission in the Volunteers category.
         */
        View = 268
      }

    }

  }

  /**
   * Permission domains for the General ledger.FENXT role domain.
   */
  export namespace GeneralledgerFENXT {

    /**
     * Categories for the Statistical units permission domain.
     */
    export namespace Statisticalunits {

      /**
       *  Permissions categorized under Unit types in the Statistical units permission domain.
       */
      export const enum Unittypes {

        /**
         * The View permission in the Unit types category.
         */
        View = 276,

        /**
         * The Add permission in the Unit types category.
         */
        Add = 277,

        /**
         * The Edit permission in the Unit types category.
         */
        Edit = 278
      }

      /**
       *  Permissions categorized under Unit counts in the Statistical units permission domain.
       */
      export const enum Unitcounts {

        /**
         * The View permission in the Unit counts category.
         */
        View = 279,

        /**
         * The Add permission in the Unit counts category.
         */
        Add = 280,

        /**
         * The Edit permission in the Unit counts category.
         */
        Edit = 281,

        /**
         * The Delete permission in the Unit counts category.
         */
        Delete = 282
      }

    }

  }

  export namespace GeneralledgerFENXT {

    /**
     * Categories for the Allocations permission domain.
     */
    export namespace Allocations {

      /**
       *  Permissions categorized under Allocations in the Allocations permission domain.
       */
      export const enum Allocations {

        /**
         * The View permission in the Allocations category.
         */
        View = 288,

        /**
         * The Add permission in the Allocations category.
         */
        Add = 289,

        /**
         * The Edit permission in the Allocations category.
         */
        Edit = 290,

        /**
         * The Delete permission in the Allocations category.
         */
        Delete = 291,

        /**
         * The Run permission in the Allocations category.
         */
        Run = 292
      }

    }

  }

  /**
   * Permission domains for the Financial.FENXT role domain.
   */
  export namespace FinancialFENXT {

    /**
     * Categories for the Analyze permission domain.
     */
    export namespace Analyze {

      /**
       *  Permissions categorized under General ledger dashboards in the Analyze permission domain.
       */
      export const enum Generalledgerdashboards {

        /**
         * The Accounts permission in the General ledger dashboards category.
         */
        Accounts = 307,

        /**
         * The Net assets permission in the General ledger dashboards category.
         */
        Netassets = 308,

        /**
         * The Projects permission in the General ledger dashboards category.
         */
        Projects = 309,

        /**
         * The Project income and expenses permission in the General ledger dashboards category.
         */
        Projectincomeandexpenses = 310,

        /**
         * The Transaction code 1 permission in the General ledger dashboards category.
         */
        Transactioncode1 = 311,

        /**
         * The Transaction code 2 permission in the General ledger dashboards category.
         */
        Transactioncode2 = 312,

        /**
         * The Transaction code 3 permission in the General ledger dashboards category.
         */
        Transactioncode3 = 313,

        /**
         * The Transaction code 4 permission in the General ledger dashboards category.
         */
        Transactioncode4 = 314,

        /**
         * The Transaction code 5 permission in the General ledger dashboards category.
         */
        Transactioncode5 = 315
      }

      /**
       *  Permissions categorized under Subledger dashboards in the Analyze permission domain.
       */
      export const enum Subledgerdashboards {

        /**
         * The Payables permission in the Subledger dashboards category.
         */
        Payables = 316,

        /**
         * The Receivables permission in the Subledger dashboards category.
         */
        Receivables = 317,

        /**
         * The Development permission in the Subledger dashboards category.
         */
        Development = 318
      }

      /**
       *  Permissions categorized under Management dashboards in the Analyze permission domain.
       */
      export const enum Managementdashboards {

        /**
         * The History of changes permission in the Management dashboards category.
         */
        Historyofchanges = 319,

        /**
         * The Metrics permission in the Management dashboards category.
         */
        Metrics = 320
      }

    }

  }

  /**
   * Permission domains for the Administration.LO role domain.
   */
  export namespace AdministrationLO {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 328,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 329,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 330
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 331,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 332,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 333,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 334
      }

    }

  }

  /**
   * Permission domains for the Marketing.RENXT role domain.
   */
  export namespace MarketingRENXT {

    /**
     * Categories for the Email permission domain.
     */
    export namespace Email {

      /**
       *  Permissions categorized under Email in the Email permission domain.
       */
      export const enum Email {

        /**
         * The Access permission in the Email category.
         */
        Access = 336
      }

    }

  }

  /**
   * Permission domains for the Marketing.LO role domain.
   */
  export namespace MarketingLO {

    /**
     * Categories for the Email permission domain.
     */
    export namespace Email {

      /**
       *  Permissions categorized under Email in the Email permission domain.
       */
      export const enum Email {

        /**
         * The Access permission in the Email category.
         */
        Access = 338
      }

    }

  }

  export namespace MarketingRENXT {

    /**
     * Categories for the Social permission domain.
     */
    export namespace Social {

      /**
       *  Permissions categorized under Social Posts in the Social permission domain.
       */
      export const enum SocialPosts {

        /**
         * The Create permission in the Social Posts category.
         */
        Create = 344,

        /**
         * The Edit permission in the Social Posts category.
         */
        Edit = 345,

        /**
         * The Delete permission in the Social Posts category.
         */
        Delete = 346,

        /**
         * The Send permission in the Social Posts category.
         */
        Send = 347
      }

      /**
       *  Permissions categorized under Social Accounts in the Social permission domain.
       */
      export const enum SocialAccounts {

        /**
         * The Connect permission in the Social Accounts category.
         */
        Connect = 348
      }

    }

  }

  export namespace MarketingLO {

    /**
     * Categories for the Social permission domain.
     */
    export namespace Social {

      /**
       *  Permissions categorized under Social Posts in the Social permission domain.
       */
      export const enum SocialPosts {

        /**
         * The Create permission in the Social Posts category.
         */
        Create = 354,

        /**
         * The Edit permission in the Social Posts category.
         */
        Edit = 355,

        /**
         * The Delete permission in the Social Posts category.
         */
        Delete = 356,

        /**
         * The Send permission in the Social Posts category.
         */
        Send = 357
      }

      /**
       *  Permissions categorized under Social Accounts in the Social permission domain.
       */
      export const enum SocialAccounts {

        /**
         * The Connect permission in the Social Accounts category.
         */
        Connect = 358
      }

    }

  }

  /**
   * Permission domains for the Analysis.RENXT role domain.
   */
  export namespace AnalysisRENXT {

    /**
     * Categories for the Fundraising permission domain.
     */
    export namespace Fundraising {

      /**
       *  Permissions categorized under Insights in the Fundraising permission domain.
       */
      export const enum Insights {

        /**
         * The Add/Edit permission in the Insights category.
         */
        AddEdit = 364,

        /**
         * The Delete permission in the Insights category.
         */
        Delete = 365
      }

      /**
       *  Permissions categorized under Dashboards in the Fundraising permission domain.
       */
      export const enum Dashboards {

        /**
         * The View permission in the Dashboards category.
         */
        View = 366,

        /**
         * The Add/Edit permission in the Dashboards category.
         */
        AddEdit = 367,

        /**
         * The Delete permission in the Dashboards category.
         */
        Delete = 368
      }

    }

  }

  /**
   * Permission domains for the Analysis.FENXT role domain.
   */
  export namespace AnalysisFENXT {

    /**
     * Categories for the Financial permission domain.
     */
    export namespace Financial {

      /**
       *  Permissions categorized under Insights in the Financial permission domain.
       */
      export const enum Insights {

        /**
         * The Add/Edit permission in the Insights category.
         */
        AddEdit = 374,

        /**
         * The Delete permission in the Insights category.
         */
        Delete = 375
      }

      /**
       *  Permissions categorized under Dashboards in the Financial permission domain.
       */
      export const enum Dashboards {

        /**
         * The View permission in the Dashboards category.
         */
        View = 376,

        /**
         * The Add/Edit permission in the Dashboards category.
         */
        AddEdit = 377,

        /**
         * The Delete permission in the Dashboards category.
         */
        Delete = 378
      }

    }

  }

  /**
   * Permission domains for the Events.RENXT role domain.
   */
  export namespace EventsRENXT {

    /**
     * Categories for the Event management permission domain.
     */
    export namespace Eventmanagement {

      /**
       *  Permissions categorized under Events in the Event management permission domain.
       */
      export const enum Events {

        /**
         * The View permission in the Events category.
         */
        View = 385,

        /**
         * The Add permission in the Events category.
         */
        Add = 386,

        /**
         * The Edit permission in the Events category.
         */
        Edit = 387
      }

      /**
       *  Permissions categorized under Participants in the Event management permission domain.
       */
      export const enum Participants {

        /**
         * The View permission in the Participants category.
         */
        View = 388,

        /**
         * The Add permission in the Participants category.
         */
        Add = 389,

        /**
         * The Edit permission in the Participants category.
         */
        Edit = 390
      }

    }

  }

  /**
   * Permission domains for the Fundraising.RENXT role domain.
   */
  export namespace FundraisingRENXT {

    /**
     * Categories for the Attachment permission domain.
     */
    export namespace Attachment {

      /**
       *  Permissions categorized under Appeal attachments in the Attachment permission domain.
       */
      export const enum Appealattachments {

        /**
         * The View permission in the Appeal attachments category.
         */
        View = 400,

        /**
         * The Add/Edit permission in the Appeal attachments category.
         */
        AddEdit = 401,

        /**
         * The Delete permission in the Appeal attachments category.
         */
        Delete = 402
      }

      /**
       *  Permissions categorized under Campaign attachments in the Attachment permission domain.
       */
      export const enum Campaignattachments {

        /**
         * The View permission in the Campaign attachments category.
         */
        View = 403,

        /**
         * The Add/Edit permission in the Campaign attachments category.
         */
        AddEdit = 404,

        /**
         * The Delete permission in the Campaign attachments category.
         */
        Delete = 405
      }

      /**
       *  Permissions categorized under Fund attachments in the Attachment permission domain.
       */
      export const enum Fundattachments {

        /**
         * The View permission in the Fund attachments category.
         */
        View = 406,

        /**
         * The Add/Edit permission in the Fund attachments category.
         */
        AddEdit = 407,

        /**
         * The Delete permission in the Fund attachments category.
         */
        Delete = 408
      }

    }

  }

  export namespace FundraisingRENXT {

    /**
     * Categories for the Analyze permission domain.
     */
    export namespace Analyze {

      /**
       *  Permissions categorized under Overview in the Analyze permission domain.
       */
      export const enum Overview {

        /**
         * The View permission in the Overview category.
         */
        View = 418
      }

      /**
       *  Permissions categorized under Campaigns in the Analyze permission domain.
       */
      export const enum Campaigns {

        /**
         * The View permission in the Campaigns category.
         */
        View = 419
      }

      /**
       *  Permissions categorized under Funds in the Analyze permission domain.
       */
      export const enum Funds {

        /**
         * The View permission in the Funds category.
         */
        View = 420
      }

      /**
       *  Permissions categorized under Appeals in the Analyze permission domain.
       */
      export const enum Appeals {

        /**
         * The View permission in the Appeals category.
         */
        View = 421
      }

      /**
       *  Permissions categorized under Retention in the Analyze permission domain.
       */
      export const enum Retention {

        /**
         * The View permission in the Retention category.
         */
        View = 422
      }

      /**
       *  Permissions categorized under Acquisition in the Analyze permission domain.
       */
      export const enum Acquisition {

        /**
         * The View permission in the Acquisition category.
         */
        View = 423
      }

      /**
       *  Permissions categorized under Recapture in the Analyze permission domain.
       */
      export const enum Recapture {

        /**
         * The View permission in the Recapture category.
         */
        View = 424
      }

      /**
       *  Permissions categorized under Actions in the Analyze permission domain.
       */
      export const enum Actions {

        /**
         * The View permission in the Actions category.
         */
        View = 425
      }

      /**
       *  Permissions categorized under Benchmarking in the Analyze permission domain.
       */
      export const enum Benchmarking {

        /**
         * The View permission in the Benchmarking category.
         */
        View = 426
      }

    }

  }

  export namespace FundraisingRENXT {

    /**
     * Categories for the Lists permission domain.
     */
    export namespace Lists {

      /**
       *  Permissions categorized under Actions in the Lists permission domain.
       */
      export const enum Actions {

        /**
         * The View permission in the Actions category.
         */
        View = 431
      }

      /**
       *  Permissions categorized under Constituents in the Lists permission domain.
       */
      export const enum Constituents {

        /**
         * The View permission in the Constituents category.
         */
        View = 432
      }

      /**
       *  Permissions categorized under Gifts in the Lists permission domain.
       */
      export const enum Gifts {

        /**
         * The View permission in the Gifts category.
         */
        View = 433
      }

      /**
       *  Permissions categorized under Export in the Lists permission domain.
       */
      export const enum Export {

        /**
         * The Allow permission in the Export category.
         */
        Allow = 434
      }

    }

  }

  export namespace FundraisingRENXT {

    /**
     * Categories for the Opportunities permission domain.
     */
    export namespace Opportunities {

      /**
       *  Permissions categorized under Opportunities tabs in the Opportunities permission domain.
       */
      export const enum Opportunitiestabs {

        /**
         * The Work opportunities permission in the Opportunities tabs category.
         */
        Workopportunities = 438,

        /**
         * The Lists opportunities permission in the Opportunities tabs category.
         */
        Listsopportunities = 439,

        /**
         * The Analyze opportunities permission in the Opportunities tabs category.
         */
        Analyzeopportunities = 440
      }

    }

  }

  export namespace Fundraising {

    /**
     * Categories for the Auctions permission domain.
     */
    export namespace Auctions {

      /**
       *  Permissions categorized under Auctions in the Auctions permission domain.
       */
      export const enum Auctions {

        /**
         * The Access permission in the Auctions category.
         */
        Access = 441
      }

    }

  }

  export namespace FundraisingRENXT {

    /**
     * Categories for the Auctions permission domain.
     */
    export namespace Auctions {

      /**
       *  Permissions categorized under Auctions in the Auctions permission domain.
       */
      export const enum Auctions {

        /**
         * The Access permission in the Auctions category.
         */
        Access = 443
      }

    }

  }

  export namespace FundraisingRENXT {

    /**
     * Categories for the Work permission domain.
     */
    export namespace Work {

      /**
       *  Permissions categorized under Portfolio in the Work permission domain.
       */
      export const enum Portfolio {

        /**
         * The View permission in the Portfolio category.
         */
        View = 450
      }

      /**
       *  Permissions categorized under Gifts in the Work permission domain.
       */
      export const enum Gifts {

        /**
         * The View permission in the Gifts category.
         */
        View = 451
      }

      /**
       *  Permissions categorized under Actions in the Work permission domain.
       */
      export const enum Actions {

        /**
         * The View permission in the Actions category.
         */
        View = 452
      }

      /**
       *  Permissions categorized under Unassigned in the Work permission domain.
       */
      export const enum Unassigned {

        /**
         * The View permission in the Unassigned category.
         */
        View = 453
      }

      /**
       *  Permissions categorized under Change fundraiser in the Work permission domain.
       */
      export const enum Changefundraiser {

        /**
         * The Allow permission in the Change fundraiser category.
         */
        Allow = 454
      }

      /**
       *  Permissions categorized under Export in the Work permission domain.
       */
      export const enum Export {

        /**
         * The Allow permission in the Export category.
         */
        Allow = 455
      }

    }

  }

  /**
   * Permission domains for the Tools.RENXT role domain.
   */
  export namespace ToolsRENXT {

    /**
     * Categories for the Data Health permission domain.
     */
    export namespace DataHealth {

      /**
       *  Permissions categorized under Data Health Services in the Data Health permission domain.
       */
      export const enum DataHealthServices {

        /**
         * The View permission in the Data Health Services category.
         */
        View = 460,

        /**
         * The Manage permission in the Data Health Services category.
         */
        Manage = 461
      }

      /**
       *  Permissions categorized under Duplicate Management in the Data Health permission domain.
       */
      export const enum DuplicateManagement {

        /**
         * The View permission in the Duplicate Management category.
         */
        View = 462,

        /**
         * The Manage permission in the Duplicate Management category.
         */
        Manage = 463
      }

    }

  }

  export namespace ToolsRENXT {

    /**
     * Categories for the Workflow designer permission domain.
     */
    export namespace Workflowdesigner {

      /**
       *  Permissions categorized under Workflows in the Workflow designer permission domain.
       */
      export const enum Workflows {

        /**
         * The View permission in the Workflows category.
         */
        View = 468,

        /**
         * The Add/Edit permission in the Workflows category.
         */
        AddEdit = 469,

        /**
         * The Delete permission in the Workflows category.
         */
        Delete = 470
      }

      /**
       *  Permissions categorized under Action workflows in the Workflow designer permission domain.
       */
      export const enum Actionworkflows {

        /**
         * The Apply permission in the Action workflows category.
         */
        Apply = 471
      }

    }

  }

  /**
   * Permission domains for the Administration.AUC role domain.
   */
  export namespace AdministrationAUC {

    /**
     * Categories for the Security permission domain.
     */
    export namespace Security {

      /**
       *  Permissions categorized under Users in the Security permission domain.
       */
      export const enum Users {

        /**
         * The View permission in the Users category.
         */
        View = 479,

        /**
         * The Add\Edit permission in the Users category.
         */
        AddEdit = 480,

        /**
         * The Mark Inactive permission in the Users category.
         */
        MarkInactive = 481
      }

      /**
       *  Permissions categorized under Roles in the Security permission domain.
       */
      export const enum Roles {

        /**
         * The View permission in the Roles category.
         */
        View = 482,

        /**
         * The Add\Edit permission in the Roles category.
         */
        AddEdit = 483,

        /**
         * The Mark Inactive permission in the Roles category.
         */
        MarkInactive = 484,

        /**
         * The Delete permission in the Roles category.
         */
        Delete = 485
      }

    }

  }

  /**
   * Permission domains for the Events.AUC role domain.
   */
  export namespace EventsAUC {

    /**
     * Categories for the Auctions permission domain.
     */
    export namespace Auctions {

      /**
       *  Permissions categorized under Auctions in the Auctions permission domain.
       */
      export const enum Auctions {

        /**
         * The Manage permission in the Auctions category.
         */
        Manage = 487
      }

    }

  }

  /**
   * Permission domains for the Global role domain.
   */
  export namespace Global {

    /**
     * Categories for the User permission domain.
     */
    export namespace User {

      /**
       *  Permissions categorized under Administrator in the User permission domain.
       */
      export const enum Administrator {

        /**
         * The BlackbaudEmployee permission in the Administrator category.
         */
        BlackbaudEmployee = 1,

        /**
         * The Legal Entity permission in the Administrator category.
         */
        LegalEntity = 2,

        /**
         * The Environment permission in the Administrator category.
         */
        Environment = 3
      }

    }

  }

}
