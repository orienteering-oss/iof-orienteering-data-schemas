var org_orienteering_datastandard__3_Module_Factory = function () {
  var org_orienteering_datastandard__3 = {
    name: "org_orienteering_datastandard__3",
    defaultElementNamespaceURI: "http://www.orienteering.org/datastandard/3.0",
    typeInfos: [
      {
        localName: "PersonRaceStart",
        propertyInfos: [
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "startTime",
            elementName: "StartTime",
            typeInfo: "DateTime",
          },
          {
            name: "course",
            elementName: "Course",
            typeInfo: ".SimpleCourse",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonRaceResult",
        propertyInfos: [
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "startTime",
            elementName: "StartTime",
            typeInfo: "DateTime",
          },
          {
            name: "finishTime",
            elementName: "FinishTime",
            typeInfo: "DateTime",
          },
          {
            name: "time",
            elementName: "Time",
            typeInfo: "Double",
          },
          {
            name: "timeBehind",
            elementName: "TimeBehind",
            typeInfo: "Double",
          },
          {
            name: "position",
            elementName: "Position",
            typeInfo: "Integer",
          },
          {
            name: "status",
            required: true,
            elementName: "Status",
            typeInfo: ".ResultStatus",
          },
          {
            name: "score",
            minOccurs: 0,
            collection: true,
            elementName: "Score",
            typeInfo: ".Score",
          },
          {
            name: "overallResult",
            elementName: "OverallResult",
            typeInfo: ".OverallResult",
          },
          {
            name: "course",
            elementName: "Course",
            typeInfo: ".SimpleCourse",
          },
          {
            name: "splitTime",
            minOccurs: 0,
            collection: true,
            elementName: "SplitTime",
            typeInfo: ".SplitTime",
          },
          {
            name: "controlAnswer",
            minOccurs: 0,
            collection: true,
            elementName: "ControlAnswer",
            typeInfo: ".ControlAnswer",
          },
          {
            name: "route",
            elementName: "Route",
            typeInfo: ".Route",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Competitor",
        propertyInfos: [
          {
            name: "person",
            required: true,
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            minOccurs: 0,
            collection: true,
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "clazz",
            minOccurs: 0,
            collection: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "score",
            minOccurs: 0,
            collection: true,
            elementName: "Score",
            typeInfo: ".Score",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Organisation",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "shortName",
            elementName: "ShortName",
          },
          {
            name: "mediaName",
            elementName: "MediaName",
          },
          {
            name: "parentOrganisationId",
            elementName: "ParentOrganisationId",
            typeInfo: "Integer",
          },
          {
            name: "country",
            elementName: "Country",
            typeInfo: ".Country",
          },
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: "Address",
            typeInfo: ".Address",
          },
          {
            name: "contact",
            minOccurs: 0,
            collection: true,
            elementName: "Contact",
            typeInfo: ".Contact",
          },
          {
            name: "position",
            elementName: "Position",
            typeInfo: ".GeoPosition",
          },
          {
            name: "account",
            minOccurs: 0,
            collection: true,
            elementName: "Account",
            typeInfo: ".Account",
          },
          {
            name: "role",
            minOccurs: 0,
            collection: true,
            elementName: "Role",
            typeInfo: ".Role",
          },
          {
            name: "logotype",
            minOccurs: 0,
            collection: true,
            elementName: "Logotype",
            typeInfo: ".Image",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "type",
            values: [
              "IOF",
              "IOFRegion",
              "NationalFederation",
              "NationalRegion",
              "Club",
              "School",
              "Company",
              "Military",
              "Other",
            ],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Leg",
        propertyInfos: [
          {
            name: "name",
            elementName: "Name",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "minNumberOfCompetitors",
            typeInfo: "Integer",
            defaultValue: 1,
            attributeName: {
              localPart: "minNumberOfCompetitors",
            },
            type: "attribute",
          },
          {
            name: "maxNumberOfCompetitors",
            typeInfo: "Integer",
            defaultValue: 1,
            attributeName: {
              localPart: "maxNumberOfCompetitors",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamResult",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "organisation",
            minOccurs: 0,
            collection: true,
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "teamMemberResult",
            minOccurs: 0,
            collection: true,
            elementName: "TeamMemberResult",
            typeInfo: ".TeamMemberResult",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "ServiceRequestList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "event",
            required: true,
            elementName: "Event",
            typeInfo: ".Event",
          },
          {
            name: "organisationServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "OrganisationServiceRequest",
            typeInfo: ".OrganisationServiceRequest",
          },
          {
            name: "personServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "PersonServiceRequest",
            typeInfo: ".PersonServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Fee",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            collection: true,
            elementName: "Name",
            typeInfo: ".LanguageString",
          },
          {
            name: "amount",
            elementName: "Amount",
            typeInfo: ".Amount",
          },
          {
            name: "taxableAmount",
            elementName: "TaxableAmount",
            typeInfo: ".Amount",
          },
          {
            name: "percentage",
            elementName: "Percentage",
            typeInfo: "Double",
          },
          {
            name: "taxablePercentage",
            elementName: "TaxablePercentage",
            typeInfo: "Double",
          },
          {
            name: "validFromTime",
            elementName: "ValidFromTime",
            typeInfo: "DateTime",
          },
          {
            name: "validToTime",
            elementName: "ValidToTime",
            typeInfo: "DateTime",
          },
          {
            name: "fromDateOfBirth",
            elementName: "FromDateOfBirth",
            typeInfo: "Date",
          },
          {
            name: "toDateOfBirth",
            elementName: "ToDateOfBirth",
            typeInfo: "Date",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "type",
            values: ["Normal", "Late"],
            defaultValue: "Normal",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Extensions",
        propertyInfos: [
          {
            name: "any",
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: "anyElement",
          },
        ],
      },
      {
        localName: "PersonCourseAssignment",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "personName",
            elementName: "PersonName",
          },
          {
            name: "className",
            elementName: "ClassName",
          },
          {
            name: "courseName",
            elementName: "CourseName",
          },
          {
            name: "courseFamily",
            elementName: "CourseFamily",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "ControlAnswer",
        propertyInfos: [
          {
            name: "answer",
            required: true,
            elementName: "Answer",
          },
          {
            name: "correctAnswer",
            required: true,
            elementName: "CorrectAnswer",
          },
          {
            name: "time",
            elementName: "Time",
            typeInfo: "Double",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "OrganisationServiceRequest",
        propertyInfos: [
          {
            name: "organisation",
            required: true,
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "personServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "PersonServiceRequest",
            typeInfo: ".PersonServiceRequest",
          },
        ],
      },
      {
        localName: "TeamMemberRaceStart",
        propertyInfos: [
          {
            name: "leg",
            elementName: "Leg",
            typeInfo: "Integer",
          },
          {
            name: "legOrder",
            elementName: "LegOrder",
            typeInfo: "Integer",
          },
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "startTime",
            elementName: "StartTime",
            typeInfo: "DateTime",
          },
          {
            name: "course",
            elementName: "Course",
            typeInfo: ".SimpleCourse",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Amount",
        propertyInfos: [
          {
            name: "value",
            typeInfo: "Decimal",
            type: "value",
          },
          {
            name: "currency",
            attributeName: {
              localPart: "currency",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Schedule",
        propertyInfos: [
          {
            name: "startTime",
            required: true,
            elementName: "StartTime",
            typeInfo: "DateTime",
          },
          {
            name: "endTime",
            elementName: "EndTime",
            typeInfo: "DateTime",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "venue",
            elementName: "Venue",
          },
          {
            name: "position",
            elementName: "Position",
            typeInfo: ".GeoPosition",
          },
          {
            name: "details",
            elementName: "Details",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "GeoPosition",
        propertyInfos: [
          {
            name: "lng",
            required: true,
            typeInfo: "Double",
            attributeName: {
              localPart: "lng",
            },
            type: "attribute",
          },
          {
            name: "lat",
            required: true,
            typeInfo: "Double",
            attributeName: {
              localPart: "lat",
            },
            type: "attribute",
          },
          {
            name: "alt",
            typeInfo: "Double",
            attributeName: {
              localPart: "alt",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EventList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "event",
            minOccurs: 0,
            collection: true,
            elementName: "Event",
            typeInfo: ".Event",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Address",
        propertyInfos: [
          {
            name: "careOf",
            elementName: "CareOf",
          },
          {
            name: "street",
            elementName: "Street",
          },
          {
            name: "zipCode",
            elementName: "ZipCode",
          },
          {
            name: "city",
            elementName: "City",
          },
          {
            name: "state",
            elementName: "State",
          },
          {
            name: "country",
            elementName: "Country",
            typeInfo: ".Country",
          },
          {
            name: "type",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ControlCardList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "owner",
            elementName: "Owner",
          },
          {
            name: "controlCard",
            required: true,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Map",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "image",
            elementName: "Image",
            typeInfo: ".Image",
          },
          {
            name: "scale",
            required: true,
            elementName: "Scale",
            typeInfo: "Double",
          },
          {
            name: "mapPositionTopLeft",
            required: true,
            elementName: "MapPositionTopLeft",
            typeInfo: ".MapPosition",
          },
          {
            name: "mapPositionBottomRight",
            required: true,
            elementName: "MapPositionBottomRight",
            typeInfo: ".MapPosition",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "TeamMemberResult",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "person",
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "result",
            minOccurs: 0,
            collection: true,
            elementName: "Result",
            typeInfo: ".TeamMemberRaceResult",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Country",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "code",
            required: true,
            attributeName: {
              localPart: "code",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "StartName",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EntryList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "event",
            required: true,
            elementName: "Event",
            typeInfo: ".Event",
          },
          {
            name: "teamEntry",
            minOccurs: 0,
            collection: true,
            elementName: "TeamEntry",
            typeInfo: ".TeamEntry",
          },
          {
            name: "personEntry",
            minOccurs: 0,
            collection: true,
            elementName: "PersonEntry",
            typeInfo: ".PersonEntry",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "RaceCourseData",
        propertyInfos: [
          {
            name: "map",
            minOccurs: 0,
            collection: true,
            elementName: "Map",
            typeInfo: ".Map",
          },
          {
            name: "control",
            minOccurs: 0,
            collection: true,
            elementName: "Control",
            typeInfo: ".Control",
          },
          {
            name: "course",
            minOccurs: 0,
            collection: true,
            elementName: "Course",
            typeInfo: ".Course",
          },
          {
            name: "classCourseAssignment",
            minOccurs: 0,
            collection: true,
            elementName: "ClassCourseAssignment",
            typeInfo: ".ClassCourseAssignment",
          },
          {
            name: "personCourseAssignment",
            minOccurs: 0,
            collection: true,
            elementName: "PersonCourseAssignment",
            typeInfo: ".PersonCourseAssignment",
          },
          {
            name: "teamCourseAssignment",
            minOccurs: 0,
            collection: true,
            elementName: "TeamCourseAssignment",
            typeInfo: ".TeamCourseAssignment",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Id",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "type",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamEntry",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "organisation",
            minOccurs: 0,
            collection: true,
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "teamEntryPerson",
            minOccurs: 0,
            collection: true,
            elementName: "TeamEntryPerson",
            typeInfo: ".TeamEntryPerson",
          },
          {
            name: "clazz",
            minOccurs: 0,
            collection: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "race",
            minOccurs: 0,
            collection: true,
            elementName: "Race",
            typeInfo: "Integer",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "startTimeAllocationRequest",
            elementName: "StartTimeAllocationRequest",
            typeInfo: ".StartTimeAllocationRequest",
          },
          {
            name: "contactInformation",
            elementName: "ContactInformation",
          },
          {
            name: "entryTime",
            elementName: "EntryTime",
            typeInfo: "DateTime",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Account",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "type",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Route",
        propertyInfos: [
          {
            name: "value",
            typeInfo: "Base64Binary",
            type: "value",
          },
        ],
      },
      {
        localName: "CourseControl",
        propertyInfos: [
          {
            name: "control",
            required: true,
            collection: true,
            elementName: "Control",
          },
          {
            name: "mapText",
            elementName: "MapText",
          },
          {
            name: "mapTextPosition",
            elementName: "MapTextPosition",
            typeInfo: ".MapPosition",
          },
          {
            name: "legLength",
            elementName: "LegLength",
            typeInfo: "Double",
          },
          {
            name: "score",
            elementName: "Score",
            typeInfo: "Double",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "type",
            typeInfo: ".ControlType",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "randomOrder",
            typeInfo: "Boolean",
            defaultValue: false,
            attributeName: {
              localPart: "randomOrder",
            },
            type: "attribute",
          },
          {
            name: "specialInstruction",
            values: [
              "None",
              "TapedRoute",
              "FunnelTapedRoute",
              "MandatoryCrossingPoint",
              "MandatoryOutOfBoundsAreaPassage",
            ],
            defaultValue: "None",
            attributeName: {
              localPart: "specialInstruction",
            },
            type: "attribute",
          },
          {
            name: "tapedRouteLength",
            typeInfo: "Double",
            attributeName: {
              localPart: "tapedRouteLength",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "CompetitorList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "competitor",
            minOccurs: 0,
            collection: true,
            elementName: "Competitor",
            typeInfo: ".Competitor",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Race",
        propertyInfos: [
          {
            name: "raceNumber",
            required: true,
            elementName: "RaceNumber",
            typeInfo: "Integer",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "startTime",
            elementName: "StartTime",
            typeInfo: ".DateAndOptionalTime",
          },
          {
            name: "endTime",
            elementName: "EndTime",
            typeInfo: ".DateAndOptionalTime",
          },
          {
            name: "status",
            elementName: "Status",
            typeInfo: ".EventStatus",
          },
          {
            name: "classification",
            elementName: "Classification",
            typeInfo: ".EventClassification",
          },
          {
            name: "position",
            elementName: "Position",
            typeInfo: ".GeoPosition",
          },
          {
            name: "discipline",
            minOccurs: 0,
            collection: true,
            elementName: "Discipline",
            typeInfo: ".RaceDiscipline",
          },
          {
            name: "organiser",
            minOccurs: 0,
            collection: true,
            elementName: "Organiser",
            typeInfo: ".Organisation",
          },
          {
            name: "official",
            minOccurs: 0,
            collection: true,
            elementName: "Official",
            typeInfo: ".Role",
          },
          {
            name: "service",
            minOccurs: 0,
            collection: true,
            elementName: "Service",
            typeInfo: ".Service",
          },
          {
            name: "url",
            minOccurs: 0,
            collection: true,
            elementName: "URL",
            typeInfo: ".EventURL",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "StartTimeAllocationRequest",
        propertyInfos: [
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "person",
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "type",
            values: [
              "Normal",
              "EarlyStart",
              "LateStart",
              "SeparatedFrom",
              "GroupedWith",
            ],
            defaultValue: "Normal",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Class",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "shortName",
            elementName: "ShortName",
          },
          {
            name: "classType",
            minOccurs: 0,
            collection: true,
            elementName: "ClassType",
            typeInfo: ".ClassType",
          },
          {
            name: "leg",
            minOccurs: 0,
            collection: true,
            elementName: "Leg",
            typeInfo: ".Leg",
          },
          {
            name: "teamFee",
            minOccurs: 0,
            collection: true,
            elementName: "TeamFee",
            typeInfo: ".Fee",
          },
          {
            name: "fee",
            minOccurs: 0,
            collection: true,
            elementName: "Fee",
            typeInfo: ".Fee",
          },
          {
            name: "status",
            elementName: "Status",
            typeInfo: ".EventClassStatus",
            defaultValue: "Normal",
          },
          {
            name: "raceClass",
            minOccurs: 0,
            collection: true,
            elementName: "RaceClass",
            typeInfo: ".RaceClass",
          },
          {
            name: "tooFewEntriesSubstituteClass",
            elementName: "TooFewEntriesSubstituteClass",
            typeInfo: ".Class",
          },
          {
            name: "tooManyEntriesSubstituteClass",
            elementName: "TooManyEntriesSubstituteClass",
            typeInfo: ".Class",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "minAge",
            typeInfo: "Integer",
            attributeName: {
              localPart: "minAge",
            },
            type: "attribute",
          },
          {
            name: "maxAge",
            typeInfo: "Integer",
            attributeName: {
              localPart: "maxAge",
            },
            type: "attribute",
          },
          {
            name: "sex",
            values: ["B", "F", "M"],
            defaultValue: "B",
            attributeName: {
              localPart: "sex",
            },
            type: "attribute",
          },
          {
            name: "minNumberOfTeamMembers",
            typeInfo: "Integer",
            defaultValue: 1,
            attributeName: {
              localPart: "minNumberOfTeamMembers",
            },
            type: "attribute",
          },
          {
            name: "maxNumberOfTeamMembers",
            typeInfo: "Integer",
            defaultValue: 1,
            attributeName: {
              localPart: "maxNumberOfTeamMembers",
            },
            type: "attribute",
          },
          {
            name: "minTeamAge",
            typeInfo: "Integer",
            attributeName: {
              localPart: "minTeamAge",
            },
            type: "attribute",
          },
          {
            name: "maxTeamAge",
            typeInfo: "Integer",
            attributeName: {
              localPart: "maxTeamAge",
            },
            type: "attribute",
          },
          {
            name: "numberOfCompetitors",
            typeInfo: "Integer",
            attributeName: {
              localPart: "numberOfCompetitors",
            },
            type: "attribute",
          },
          {
            name: "maxNumberOfCompetitors",
            typeInfo: "Integer",
            attributeName: {
              localPart: "maxNumberOfCompetitors",
            },
            type: "attribute",
          },
          {
            name: "resultListMode",
            values: ["Default", "Unordered", "UnorderedNoTimes"],
            defaultValue: "Default",
            attributeName: {
              localPart: "resultListMode",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamMemberCourseAssignment",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "leg",
            elementName: "Leg",
            typeInfo: "Integer",
          },
          {
            name: "legOrder",
            elementName: "LegOrder",
            typeInfo: "Integer",
          },
          {
            name: "teamMemberName",
            elementName: "TeamMemberName",
          },
          {
            name: "courseName",
            elementName: "CourseName",
          },
          {
            name: "courseFamily",
            elementName: "CourseFamily",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "TeamMemberRaceResult.TimeBehind",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            typeInfo: "Double",
            type: "value",
          },
          {
            name: "type",
            required: true,
            values: ["Leg", "Course"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Image",
        propertyInfos: [
          {
            name: "value",
            typeInfo: "Base64Binary",
            type: "value",
          },
          {
            name: "url",
            attributeName: {
              localPart: "url",
            },
            type: "attribute",
          },
          {
            name: "mediaType",
            required: true,
            attributeName: {
              localPart: "mediaType",
            },
            type: "attribute",
          },
          {
            name: "width",
            typeInfo: "Integer",
            attributeName: {
              localPart: "width",
            },
            type: "attribute",
          },
          {
            name: "height",
            typeInfo: "Integer",
            attributeName: {
              localPart: "height",
            },
            type: "attribute",
          },
          {
            name: "resolution",
            typeInfo: "Double",
            attributeName: {
              localPart: "resolution",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "CourseData",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "event",
            required: true,
            elementName: "Event",
            typeInfo: ".Event",
          },
          {
            name: "raceCourseData",
            required: true,
            collection: true,
            elementName: "RaceCourseData",
            typeInfo: ".RaceCourseData",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Score",
        propertyInfos: [
          {
            name: "value",
            typeInfo: "Double",
            type: "value",
          },
          {
            name: "type",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "SimpleRaceCourse",
        baseTypeInfo: ".SimpleCourse",
        propertyInfos: [
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "StartList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "event",
            required: true,
            elementName: "Event",
            typeInfo: ".Event",
          },
          {
            name: "classStart",
            minOccurs: 0,
            collection: true,
            elementName: "ClassStart",
            typeInfo: ".ClassStart",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Service",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            collection: true,
            elementName: "Name",
            typeInfo: ".LanguageString",
          },
          {
            name: "fee",
            minOccurs: 0,
            collection: true,
            elementName: "Fee",
            typeInfo: ".Fee",
          },
          {
            name: "description",
            minOccurs: 0,
            collection: true,
            elementName: "Description",
            typeInfo: ".LanguageString",
          },
          {
            name: "maxNumber",
            elementName: "MaxNumber",
            typeInfo: "Double",
          },
          {
            name: "requestedNumber",
            elementName: "RequestedNumber",
            typeInfo: "Double",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "type",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "SimpleCourse",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            elementName: "Name",
          },
          {
            name: "courseFamily",
            elementName: "CourseFamily",
          },
          {
            name: "length",
            elementName: "Length",
            typeInfo: "Double",
          },
          {
            name: "climb",
            elementName: "Climb",
            typeInfo: "Double",
          },
          {
            name: "numberOfControls",
            elementName: "NumberOfControls",
            typeInfo: "Integer",
          },
        ],
      },
      {
        localName: "PersonName",
        propertyInfos: [
          {
            name: "family",
            required: true,
            elementName: "Family",
          },
          {
            name: "given",
            required: true,
            elementName: "Given",
          },
        ],
      },
      {
        localName: "ClassCourseAssignment",
        propertyInfos: [
          {
            name: "classId",
            elementName: "ClassId",
            typeInfo: ".Id",
          },
          {
            name: "className",
            required: true,
            elementName: "ClassName",
          },
          {
            name: "allowedOnLeg",
            minOccurs: 0,
            collection: true,
            elementName: "AllowedOnLeg",
            typeInfo: "Integer",
          },
          {
            name: "courseName",
            elementName: "CourseName",
          },
          {
            name: "courseFamily",
            elementName: "CourseFamily",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "numberOfCompetitors",
            typeInfo: "Integer",
            attributeName: {
              localPart: "numberOfCompetitors",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamStart",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "name",
            elementName: "Name",
          },
          {
            name: "organisation",
            minOccurs: 0,
            collection: true,
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "teamMemberStart",
            minOccurs: 0,
            collection: true,
            elementName: "TeamMemberStart",
            typeInfo: ".TeamMemberStart",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "BaseMessageElement",
        propertyInfos: [
          {
            name: "iofVersion",
            required: true,
            attributeName: {
              localPart: "iofVersion",
            },
            type: "attribute",
          },
          {
            name: "createTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "createTime",
            },
            type: "attribute",
          },
          {
            name: "creator",
            attributeName: {
              localPart: "creator",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "LanguageString",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "language",
            attributeName: {
              localPart: "language",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Course",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "courseFamily",
            elementName: "CourseFamily",
          },
          {
            name: "length",
            elementName: "Length",
            typeInfo: "Double",
          },
          {
            name: "climb",
            elementName: "Climb",
            typeInfo: "Double",
          },
          {
            name: "courseControl",
            required: true,
            minOccurs: 2,
            collection: true,
            elementName: "CourseControl",
            typeInfo: ".CourseControl",
          },
          {
            name: "mapId",
            elementName: "MapId",
            typeInfo: "Integer",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "numberOfCompetitors",
            typeInfo: "Integer",
            attributeName: {
              localPart: "numberOfCompetitors",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ClassResult",
        propertyInfos: [
          {
            name: "clazz",
            required: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "course",
            minOccurs: 0,
            collection: true,
            elementName: "Course",
            typeInfo: ".SimpleRaceCourse",
          },
          {
            name: "personResult",
            minOccurs: 0,
            collection: true,
            elementName: "PersonResult",
            typeInfo: ".PersonResult",
          },
          {
            name: "teamResult",
            minOccurs: 0,
            collection: true,
            elementName: "TeamResult",
            typeInfo: ".TeamResult",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "timeResolution",
            typeInfo: "Double",
            defaultValue: 1,
            attributeName: {
              localPart: "timeResolution",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Control",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "punchingUnitId",
            minOccurs: 0,
            collection: true,
            elementName: "PunchingUnitId",
            typeInfo: ".Id",
          },
          {
            name: "name",
            minOccurs: 0,
            collection: true,
            elementName: "Name",
            typeInfo: ".LanguageString",
          },
          {
            name: "position",
            elementName: "Position",
            typeInfo: ".GeoPosition",
          },
          {
            name: "mapPosition",
            elementName: "MapPosition",
            typeInfo: ".MapPosition",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "type",
            typeInfo: ".ControlType",
            defaultValue: "Control",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Event",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "startTime",
            elementName: "StartTime",
            typeInfo: ".DateAndOptionalTime",
          },
          {
            name: "endTime",
            elementName: "EndTime",
            typeInfo: ".DateAndOptionalTime",
          },
          {
            name: "status",
            elementName: "Status",
            typeInfo: ".EventStatus",
          },
          {
            name: "classification",
            elementName: "Classification",
            typeInfo: ".EventClassification",
          },
          {
            name: "form",
            minOccurs: 0,
            collection: true,
            elementName: "Form",
            typeInfo: ".EventForm",
          },
          {
            name: "organiser",
            minOccurs: 0,
            collection: true,
            elementName: "Organiser",
            typeInfo: ".Organisation",
          },
          {
            name: "official",
            minOccurs: 0,
            collection: true,
            elementName: "Official",
            typeInfo: ".Role",
          },
          {
            name: "clazz",
            minOccurs: 0,
            collection: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "race",
            minOccurs: 0,
            collection: true,
            elementName: "Race",
            typeInfo: ".Race",
          },
          {
            name: "entryReceiver",
            elementName: "EntryReceiver",
            typeInfo: ".EntryReceiver",
          },
          {
            name: "service",
            minOccurs: 0,
            collection: true,
            elementName: "Service",
            typeInfo: ".Service",
          },
          {
            name: "account",
            minOccurs: 0,
            collection: true,
            elementName: "Account",
            typeInfo: ".Account",
          },
          {
            name: "url",
            minOccurs: 0,
            collection: true,
            elementName: "URL",
            typeInfo: ".EventURL",
          },
          {
            name: "information",
            minOccurs: 0,
            collection: true,
            elementName: "Information",
            typeInfo: ".InformationItem",
          },
          {
            name: "schedule",
            minOccurs: 0,
            collection: true,
            elementName: "Schedule",
            typeInfo: ".Schedule",
          },
          {
            name: "news",
            minOccurs: 0,
            collection: true,
            elementName: "News",
            typeInfo: ".InformationItem",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "OrganisationList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "organisation",
            minOccurs: 0,
            collection: true,
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "EventURL",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "type",
            required: true,
            values: ["Website", "StartList", "ResultList", "Other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonServiceRequest",
        propertyInfos: [
          {
            name: "person",
            required: true,
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "serviceRequest",
            required: true,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
        ],
      },
      {
        localName: "DateAndOptionalTime",
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: "Date",
            typeInfo: "Date",
          },
          {
            name: "time",
            elementName: "Time",
            typeInfo: "Time",
          },
        ],
      },
      {
        localName: "ClassStart",
        propertyInfos: [
          {
            name: "clazz",
            required: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "course",
            minOccurs: 0,
            collection: true,
            elementName: "Course",
            typeInfo: ".SimpleRaceCourse",
          },
          {
            name: "startName",
            minOccurs: 0,
            collection: true,
            elementName: "StartName",
            typeInfo: ".StartName",
          },
          {
            name: "personStart",
            minOccurs: 0,
            collection: true,
            elementName: "PersonStart",
            typeInfo: ".PersonStart",
          },
          {
            name: "teamStart",
            minOccurs: 0,
            collection: true,
            elementName: "TeamStart",
            typeInfo: ".TeamStart",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "timeResolution",
            typeInfo: "Double",
            defaultValue: 1,
            attributeName: {
              localPart: "timeResolution",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Contact",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "type",
            required: true,
            values: [
              "PhoneNumber",
              "MobilePhoneNumber",
              "FaxNumber",
              "EmailAddress",
              "WebAddress",
              "Other",
            ],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "OverallResult",
        propertyInfos: [
          {
            name: "time",
            elementName: "Time",
            typeInfo: "Double",
          },
          {
            name: "timeBehind",
            elementName: "TimeBehind",
            typeInfo: "Double",
          },
          {
            name: "position",
            elementName: "Position",
            typeInfo: "Integer",
          },
          {
            name: "status",
            required: true,
            elementName: "Status",
            typeInfo: ".ResultStatus",
          },
          {
            name: "score",
            minOccurs: 0,
            collection: true,
            elementName: "Score",
            typeInfo: ".Score",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "Role",
        propertyInfos: [
          {
            name: "person",
            required: true,
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "type",
            required: true,
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "MapPosition",
        propertyInfos: [
          {
            name: "x",
            required: true,
            typeInfo: "Double",
            attributeName: {
              localPart: "x",
            },
            type: "attribute",
          },
          {
            name: "y",
            required: true,
            typeInfo: "Double",
            attributeName: {
              localPart: "y",
            },
            type: "attribute",
          },
          {
            name: "unit",
            values: ["px", "mm"],
            defaultValue: "mm",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonStart",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "person",
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "start",
            required: true,
            collection: true,
            elementName: "Start",
            typeInfo: ".PersonRaceStart",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EntryReceiver",
        propertyInfos: [
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: "Address",
            typeInfo: ".Address",
          },
          {
            name: "contact",
            minOccurs: 0,
            collection: true,
            elementName: "Contact",
            typeInfo: ".Contact",
          },
        ],
      },
      {
        localName: "SplitTime",
        propertyInfos: [
          {
            name: "controlCode",
            required: true,
            elementName: "ControlCode",
          },
          {
            name: "time",
            elementName: "Time",
            typeInfo: "Double",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "status",
            values: ["OK", "Missing", "Additional"],
            defaultValue: "OK",
            attributeName: {
              localPart: "status",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Person",
        propertyInfos: [
          {
            name: "id",
            minOccurs: 0,
            collection: true,
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
            typeInfo: ".PersonName",
          },
          {
            name: "birthDate",
            elementName: "BirthDate",
            typeInfo: "Date",
          },
          {
            name: "nationality",
            elementName: "Nationality",
            typeInfo: ".Country",
          },
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: "Address",
            typeInfo: ".Address",
          },
          {
            name: "contact",
            minOccurs: 0,
            collection: true,
            elementName: "Contact",
            typeInfo: ".Contact",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "sex",
            values: ["F", "M"],
            attributeName: {
              localPart: "sex",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamCourseAssignment",
        propertyInfos: [
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "teamName",
            elementName: "TeamName",
          },
          {
            name: "className",
            elementName: "ClassName",
          },
          {
            name: "teamMemberCourseAssignment",
            minOccurs: 0,
            collection: true,
            elementName: "TeamMemberCourseAssignment",
            typeInfo: ".TeamMemberCourseAssignment",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "ClassType",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "name",
            required: true,
            elementName: "Name",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonEntry",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "person",
            required: true,
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "score",
            minOccurs: 0,
            collection: true,
            elementName: "Score",
            typeInfo: ".Score",
          },
          {
            name: "clazz",
            minOccurs: 0,
            collection: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "raceNumber",
            minOccurs: 0,
            collection: true,
            elementName: "RaceNumber",
            typeInfo: "Integer",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "startTimeAllocationRequest",
            elementName: "StartTimeAllocationRequest",
            typeInfo: ".StartTimeAllocationRequest",
          },
          {
            name: "entryTime",
            elementName: "EntryTime",
            typeInfo: "DateTime",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonResult",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "person",
            required: true,
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "result",
            minOccurs: 0,
            collection: true,
            elementName: "Result",
            typeInfo: ".PersonRaceResult",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamMemberStart",
        propertyInfos: [
          {
            name: "entryId",
            elementName: "EntryId",
            typeInfo: ".Id",
          },
          {
            name: "person",
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "start",
            required: true,
            collection: true,
            elementName: "Start",
            typeInfo: ".TeamMemberRaceStart",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ResultList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "event",
            required: true,
            elementName: "Event",
            typeInfo: ".Event",
          },
          {
            name: "classResult",
            minOccurs: 0,
            collection: true,
            elementName: "ClassResult",
            typeInfo: ".ClassResult",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "status",
            values: ["Complete", "Delta", "Snapshot"],
            defaultValue: "Complete",
            attributeName: {
              localPart: "status",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ControlCard",
        propertyInfos: [
          {
            name: "value",
            type: "value",
          },
          {
            name: "punchingSystem",
            attributeName: {
              localPart: "punchingSystem",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "AssignedFee",
        propertyInfos: [
          {
            name: "fee",
            required: true,
            elementName: "Fee",
            typeInfo: ".Fee",
          },
          {
            name: "paidAmount",
            elementName: "PaidAmount",
            typeInfo: ".Amount",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "RaceClass",
        propertyInfos: [
          {
            name: "punchingSystem",
            minOccurs: 0,
            collection: true,
            elementName: "PunchingSystem",
          },
          {
            name: "teamFee",
            minOccurs: 0,
            collection: true,
            elementName: "TeamFee",
            typeInfo: ".Fee",
          },
          {
            name: "fee",
            minOccurs: 0,
            collection: true,
            elementName: "Fee",
            typeInfo: ".Fee",
          },
          {
            name: "firstStart",
            elementName: "FirstStart",
            typeInfo: "DateTime",
          },
          {
            name: "status",
            elementName: "Status",
            typeInfo: ".RaceClassStatus",
          },
          {
            name: "course",
            minOccurs: 0,
            collection: true,
            elementName: "Course",
            typeInfo: ".SimpleCourse",
          },
          {
            name: "onlineControl",
            minOccurs: 0,
            collection: true,
            elementName: "OnlineControl",
            typeInfo: ".Control",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
          {
            name: "maxNumberOfCompetitors",
            typeInfo: "Integer",
            attributeName: {
              localPart: "maxNumberOfCompetitors",
            },
            type: "attribute",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ClassList",
        typeName: null,
        baseTypeInfo: ".BaseMessageElement",
        propertyInfos: [
          {
            name: "clazz",
            minOccurs: 0,
            collection: true,
            elementName: "Class",
            typeInfo: ".Class",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "TeamEntryPerson",
        propertyInfos: [
          {
            name: "person",
            elementName: "Person",
            typeInfo: ".Person",
          },
          {
            name: "organisation",
            elementName: "Organisation",
            typeInfo: ".Organisation",
          },
          {
            name: "leg",
            elementName: "Leg",
            typeInfo: "Integer",
          },
          {
            name: "legOrder",
            elementName: "LegOrder",
            typeInfo: "Integer",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "score",
            minOccurs: 0,
            collection: true,
            elementName: "Score",
            typeInfo: ".Score",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
        ],
      },
      {
        localName: "TeamMemberRaceResult",
        propertyInfos: [
          {
            name: "leg",
            elementName: "Leg",
            typeInfo: "Integer",
          },
          {
            name: "legOrder",
            elementName: "LegOrder",
            typeInfo: "Integer",
          },
          {
            name: "bibNumber",
            elementName: "BibNumber",
          },
          {
            name: "startTime",
            elementName: "StartTime",
            typeInfo: "DateTime",
          },
          {
            name: "finishTime",
            elementName: "FinishTime",
            typeInfo: "DateTime",
          },
          {
            name: "time",
            elementName: "Time",
            typeInfo: "Double",
          },
          {
            name: "timeBehind",
            minOccurs: 0,
            collection: true,
            elementName: "TimeBehind",
            typeInfo: ".TeamMemberRaceResult.TimeBehind",
          },
          {
            name: "position",
            minOccurs: 0,
            collection: true,
            elementName: "Position",
            typeInfo: ".TeamMemberRaceResult.Position",
          },
          {
            name: "status",
            required: true,
            elementName: "Status",
            typeInfo: ".ResultStatus",
          },
          {
            name: "score",
            minOccurs: 0,
            collection: true,
            elementName: "Score",
            typeInfo: ".Score",
          },
          {
            name: "overallResult",
            elementName: "OverallResult",
            typeInfo: ".OverallResult",
          },
          {
            name: "course",
            elementName: "Course",
            typeInfo: ".SimpleCourse",
          },
          {
            name: "splitTime",
            minOccurs: 0,
            collection: true,
            elementName: "SplitTime",
            typeInfo: ".SplitTime",
          },
          {
            name: "controlAnswer",
            minOccurs: 0,
            collection: true,
            elementName: "ControlAnswer",
            typeInfo: ".ControlAnswer",
          },
          {
            name: "route",
            elementName: "Route",
            typeInfo: ".Route",
          },
          {
            name: "controlCard",
            minOccurs: 0,
            collection: true,
            elementName: "ControlCard",
            typeInfo: ".ControlCard",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: "ServiceRequest",
            typeInfo: ".ServiceRequest",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "raceNumber",
            typeInfo: "Integer",
            attributeName: {
              localPart: "raceNumber",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "InformationItem",
        propertyInfos: [
          {
            name: "title",
            required: true,
            elementName: "Title",
          },
          {
            name: "content",
            required: true,
            elementName: "Content",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ServiceRequest",
        propertyInfos: [
          {
            name: "id",
            elementName: "Id",
            typeInfo: ".Id",
          },
          {
            name: "service",
            required: true,
            elementName: "Service",
            typeInfo: ".Service",
          },
          {
            name: "requestedQuantity",
            required: true,
            elementName: "RequestedQuantity",
            typeInfo: "Double",
          },
          {
            name: "deliveredQuantity",
            elementName: "DeliveredQuantity",
            typeInfo: "Double",
          },
          {
            name: "comment",
            elementName: "Comment",
          },
          {
            name: "assignedFee",
            minOccurs: 0,
            collection: true,
            elementName: "AssignedFee",
            typeInfo: ".AssignedFee",
          },
          {
            name: "extensions",
            elementName: "Extensions",
            typeInfo: ".Extensions",
          },
          {
            name: "modifyTime",
            typeInfo: "DateTime",
            attributeName: {
              localPart: "modifyTime",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamMemberRaceResult.Position",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            typeInfo: "Integer",
            type: "value",
          },
          {
            name: "type",
            required: true,
            values: ["Leg", "Course"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        type: "enumInfo",
        localName: "ControlType",
        baseTypeInfo: "NMToken",
        values: [
          "Control",
          "Start",
          "Finish",
          "CrossingPoint",
          "EndOfMarkedRoute",
        ],
      },
      {
        type: "enumInfo",
        localName: "EventForm",
        baseTypeInfo: "NMToken",
        values: ["Individual", "Team", "Relay"],
      },
      {
        type: "enumInfo",
        localName: "EventStatus",
        baseTypeInfo: "NMToken",
        values: [
          "Planned",
          "Applied",
          "Proposed",
          "Sanctioned",
          "Canceled",
          "Rescheduled",
        ],
      },
      {
        type: "enumInfo",
        localName: "RaceDiscipline",
        baseTypeInfo: "NMToken",
        values: ["Sprint", "Middle", "Long", "Ultralong", "Other"],
      },
      {
        type: "enumInfo",
        localName: "EventClassStatus",
        baseTypeInfo: "NMToken",
        values: [
          "Normal",
          "Divided",
          "Joined",
          "Invalidated",
          "InvalidatedNoFee",
        ],
      },
      {
        type: "enumInfo",
        localName: "RaceClassStatus",
        baseTypeInfo: "NMToken",
        values: [
          "StartTimesNotAllocated",
          "StartTimesAllocated",
          "NotUsed",
          "Completed",
          "Invalidated",
          "InvalidatedNoFee",
        ],
      },
      {
        type: "enumInfo",
        localName: "ResultStatus",
        baseTypeInfo: "NMToken",
        values: [
          "OK",
          "Finished",
          "MissingPunch",
          "Disqualified",
          "DidNotFinish",
          "Active",
          "Inactive",
          "OverTime",
          "SportingWithdrawal",
          "NotCompeting",
          "Moved",
          "MovedUp",
          "DidNotStart",
          "DidNotEnter",
          "Cancelled",
        ],
      },
      {
        type: "enumInfo",
        localName: "EventClassification",
        baseTypeInfo: "NMToken",
        values: ["International", "National", "Regional", "Local", "Club"],
      },
    ],
    elementInfos: [
      {
        typeInfo: ".CourseData",
        elementName: "CourseData",
      },
      {
        typeInfo: ".StartList",
        elementName: "StartList",
      },
      {
        typeInfo: ".ServiceRequestList",
        elementName: "ServiceRequestList",
      },
      {
        typeInfo: ".ResultList",
        elementName: "ResultList",
      },
      {
        typeInfo: ".CompetitorList",
        elementName: "CompetitorList",
      },
      {
        typeInfo: ".EventList",
        elementName: "EventList",
      },
      {
        typeInfo: ".ControlCardList",
        elementName: "ControlCardList",
      },
      {
        typeInfo: ".EntryList",
        elementName: "EntryList",
      },
      {
        typeInfo: ".OrganisationList",
        elementName: "OrganisationList",
      },
      {
        typeInfo: ".ClassList",
        elementName: "ClassList",
      },
    ],
  };
  return {
    org_orienteering_datastandard__3: org_orienteering_datastandard__3,
  };
};
if (typeof define === "function" && define.amd) {
  define([], org_orienteering_datastandard__3_Module_Factory);
} else {
  var org_orienteering_datastandard__3_Module = org_orienteering_datastandard__3_Module_Factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports.org_orienteering_datastandard__3 =
      org_orienteering_datastandard__3_Module.org_orienteering_datastandard__3;
  } else {
    var org_orienteering_datastandard__3 =
      org_orienteering_datastandard__3_Module.org_orienteering_datastandard__3;
  }
}
