var generated_Module_Factory = function () {
  var generated = {
    name: "generated",
    typeInfos: [
      {
        localName: "RaceStart",
        typeName: null,
        propertyInfos: [
          {
            name: "eventRaceId",
            required: true,
            elementName: {
              localPart: "EventRaceId",
            },
          },
          {
            name: "eventRace",
            required: true,
            elementName: {
              localPart: "EventRace",
            },
            typeInfo: ".EventRace",
          },
          {
            name: "start",
            required: true,
            elementName: {
              localPart: "Start",
            },
            typeInfo: ".Start",
          },
        ],
      },
      {
        localName: "AllocationControlType",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            values: [
              "normal",
              "groupedWithRef",
              "distributedFromRef",
              "earlyStart",
              "lateStart",
              "other",
            ],
            defaultValue: "normal",
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Event",
        typeName: null,
        propertyInfos: [
          {
            name: "eventId",
            required: true,
            elementName: {
              localPart: "EventId",
            },
            typeInfo: ".EventId",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "eventClassificationId",
            required: true,
            elementName: {
              localPart: "EventClassificationId",
            },
            typeInfo: ".EventClassificationId",
          },
          {
            name: "eventClassification",
            required: true,
            elementName: {
              localPart: "EventClassification",
            },
            typeInfo: ".EventClassification",
          },
          {
            name: "startDate",
            required: true,
            elementName: {
              localPart: "StartDate",
            },
            typeInfo: ".StartDate",
          },
          {
            name: "finishDate",
            elementName: {
              localPart: "FinishDate",
            },
            typeInfo: ".FinishDate",
          },
          {
            name: "eventOfficial",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EventOfficial",
            },
            typeInfo: ".EventOfficial",
          },
          {
            name: "organiser",
            elementName: {
              localPart: "Organiser",
            },
            typeInfo: ".Organiser",
          },
          {
            name: "eventClass",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EventClass",
            },
            typeInfo: ".EventClass",
          },
          {
            name: "eventRace",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EventRace",
            },
            typeInfo: ".EventRace",
          },
          {
            name: "webURL",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "WebURL",
            },
          },
          {
            name: "entryData",
            elementName: {
              localPart: "EntryData",
            },
            typeInfo: ".EntryData",
          },
          {
            name: "service",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Service",
            },
            typeInfo: ".Service",
          },
          {
            name: "account",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Account",
            },
            typeInfo: ".Account",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "eventForm",
            values: [
              "IndSingleDay",
              "IndMultiDay",
              "teamSingleDay",
              "teamMultiDay",
              "relay",
            ],
            defaultValue: "IndSingleDay",
            attributeName: {
              localPart: "eventForm",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "StartDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "CourseLength",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "unit",
            values: ["m", "km", "ft"],
            defaultValue: "m",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "CompetitorStatus",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: [
              "Inactive",
              "DidNotStart",
              "Active",
              "Finished",
              "OK",
              "MisPunch",
              "DidNotFinish",
              "Disqualified",
              "NotCompeting",
              "SportWithdr",
              "OverTime",
              "Moved",
              "MovedUp",
              "Cancelled",
            ],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ClassStart",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "eventClass",
            required: true,
            elementName: {
              localPart: "EventClass",
            },
            typeInfo: ".EventClass",
          },
          {
            name: "personStartOrTeamStart",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "PersonStart",
                },
                typeInfo: ".PersonStart",
              },
              {
                elementName: {
                  localPart: "TeamStart",
                },
                typeInfo: ".TeamStart",
              },
            ],
            type: "elements",
          },
        ],
      },
      {
        localName: "CourseVariation",
        typeName: null,
        propertyInfos: [
          {
            name: "courseVariationId",
            required: true,
            elementName: {
              localPart: "CourseVariationId",
            },
          },
          {
            name: "name",
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "courseLength",
            required: true,
            elementName: {
              localPart: "CourseLength",
            },
            typeInfo: ".CourseLength",
          },
          {
            name: "courseClimb",
            elementName: {
              localPart: "CourseClimb",
            },
            typeInfo: ".CourseClimb",
          },
          {
            name: "startPointCode",
            required: true,
            elementName: {
              localPart: "StartPointCode",
            },
          },
          {
            name: "startPoint",
            required: true,
            elementName: {
              localPart: "StartPoint",
            },
            typeInfo: ".StartPoint",
          },
          {
            name: "finishChute",
            elementName: {
              localPart: "FinishChute",
            },
          },
          {
            name: "courseControl",
            required: true,
            collection: true,
            elementName: {
              localPart: "CourseControl",
            },
            typeInfo: ".CourseControl",
          },
          {
            name: "finishPointCode",
            required: true,
            elementName: {
              localPart: "FinishPointCode",
            },
          },
          {
            name: "finishPoint",
            required: true,
            elementName: {
              localPart: "FinishPoint",
            },
            typeInfo: ".FinishPoint",
          },
          {
            name: "distanceToFinish",
            elementName: {
              localPart: "DistanceToFinish",
            },
            typeInfo: ".DistanceToFinish",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "numberOfRunners",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "numberOfRunners",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "OrganisationTypeId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TransactionList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "eventId",
            required: true,
            elementName: {
              localPart: "EventId",
            },
            typeInfo: ".EventId",
          },
          {
            name: "event",
            required: true,
            elementName: {
              localPart: "Event",
            },
            typeInfo: ".Event",
          },
          {
            name: "transaction",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Transaction",
            },
            typeInfo: ".Transaction",
          },
        ],
      },
      {
        localName: "EventClassification",
        typeName: null,
        propertyInfos: [
          {
            name: "eventClassificationId",
            required: true,
            elementName: {
              localPart: "EventClassificationId",
            },
            typeInfo: ".EventClassificationId",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "CCard",
        typeName: null,
        propertyInfos: [
          {
            name: "cCardId",
            required: true,
            elementName: {
              localPart: "CCardId",
            },
          },
          {
            name: "punchingUnitType",
            required: true,
            elementName: {
              localPart: "PunchingUnitType",
            },
            typeInfo: ".PunchingUnitType",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "miscData",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "miscData",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ClassRaceInfo",
        typeName: null,
        propertyInfos: [
          {
            name: "firstStart",
            elementName: {
              localPart: "FirstStart",
            },
            typeInfo: ".FirstStart",
          },
          {
            name: "startInterval",
            elementName: {
              localPart: "StartInterval",
            },
            typeInfo: ".StartInterval",
          },
          {
            name: "estimatedBestTime",
            elementName: {
              localPart: "EstimatedBestTime",
            },
            typeInfo: ".EstimatedBestTime",
          },
          {
            name: "estimatedLastPrizeTime",
            elementName: {
              localPart: "EstimatedLastPrizeTime",
            },
            typeInfo: ".EstimatedLastPrizeTime",
          },
          {
            name: "prizeCeremonyTime",
            elementName: {
              localPart: "PrizeCeremonyTime",
            },
            typeInfo: ".PrizeCeremonyTime",
          },
          {
            name: "allocationMethod",
            elementName: {
              localPart: "AllocationMethod",
            },
            typeInfo: ".AllocationMethod",
          },
          {
            name: "startMethod",
            elementName: {
              localPart: "StartMethod",
            },
            typeInfo: ".StartMethod",
          },
          {
            name: "classRaceStatus",
            required: true,
            elementName: {
              localPart: "ClassRaceStatus",
            },
            typeInfo: ".ClassRaceStatus",
          },
          {
            name: "courseVariationId",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "CourseVariationId",
            },
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "numberOfVacants",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "numberOfVacants",
            },
            type: "attribute",
          },
          {
            name: "rankingRace",
            values: ["Y", "N"],
            defaultValue: "N",
            attributeName: {
              localPart: "rankingRace",
            },
            type: "attribute",
          },
          {
            name: "numberOfPrizes",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "numberOfPrizes",
            },
            type: "attribute",
          },
          {
            name: "bibNumberPrefix",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "bibNumberPrefix",
            },
            type: "attribute",
          },
          {
            name: "bibNumberBase",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "bibNumberBase",
            },
            type: "attribute",
          },
          {
            name: "finishChute",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "finishChute",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "OrganisationType",
        typeName: null,
        propertyInfos: [
          {
            name: "organisationTypeId",
            required: true,
            elementName: {
              localPart: "OrganisationTypeId",
            },
            typeInfo: ".OrganisationTypeId",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "subOrganisationType",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "SubOrganisationType",
            },
            typeInfo: ".SubOrganisationType",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "EventOfficial",
        typeName: null,
        propertyInfos: [
          {
            name: "eventOfficialRole",
            required: true,
            elementName: {
              localPart: "EventOfficialRole",
            },
          },
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
        ],
      },
      {
        localName: "ValidFromDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
        ],
      },
      {
        localName: "CourseSection",
        typeName: null,
        propertyInfos: [
          {
            name: "courseSectionId",
            required: true,
            elementName: {
              localPart: "CourseSectionId",
            },
          },
          {
            name: "courseBranch",
            required: true,
            collection: true,
            elementName: {
              localPart: "CourseBranch",
            },
            typeInfo: ".CourseBranch",
          },
        ],
      },
      {
        localName: "Clock",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "clockFormat",
            typeInfo: "AnySimpleType",
            defaultValue: "HH:MM:SS",
            attributeName: {
              localPart: "clockFormat",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "FinishPoint",
        typeName: null,
        propertyInfos: [
          {
            name: "finishPointCode",
            required: true,
            elementName: {
              localPart: "FinishPointCode",
            },
          },
          {
            name: "description",
            elementName: {
              localPart: "Description",
            },
            typeInfo: ".Description",
          },
          {
            name: "controlPosition",
            elementName: {
              localPart: "ControlPosition",
            },
            typeInfo: ".ControlPosition",
          },
          {
            name: "punchingUnitOrPunchPattern",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "PunchingUnit",
                },
                typeInfo: ".PunchingUnit",
              },
              {
                elementName: {
                  localPart: "PunchPattern",
                },
              },
            ],
            type: "elements",
          },
          {
            name: "punchingUnitType",
            elementName: {
              localPart: "PunchingUnitType",
            },
            typeInfo: ".PunchingUnitType",
          },
          {
            name: "mapPosition",
            elementName: {
              localPart: "MapPosition",
            },
            typeInfo: ".MapPosition",
          },
          {
            name: "comment",
            elementName: {
              localPart: "Comment",
            },
            typeInfo: ".Comment",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "RaceResult",
        typeName: null,
        propertyInfos: [
          {
            name: "eventRaceId",
            required: true,
            elementName: {
              localPart: "EventRaceId",
            },
          },
          {
            name: "eventRace",
            required: true,
            elementName: {
              localPart: "EventRace",
            },
            typeInfo: ".EventRace",
          },
          {
            name: "result",
            required: true,
            elementName: {
              localPart: "Result",
            },
            typeInfo: ".Result",
          },
        ],
      },
      {
        localName: "Point",
        typeName: null,
        propertyInfos: [
          {
            name: "type",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "value",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Date",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "dateFormat",
            typeInfo: "AnySimpleType",
            defaultValue: "YYYY-MM-DD",
            attributeName: {
              localPart: "dateFormat",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ClassShortName",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Control",
        typeName: null,
        propertyInfos: [
          {
            name: "controlCode",
            required: true,
            elementName: {
              localPart: "ControlCode",
            },
          },
          {
            name: "description",
            elementName: {
              localPart: "Description",
            },
            typeInfo: ".Description",
          },
          {
            name: "controlPosition",
            elementName: {
              localPart: "ControlPosition",
            },
            typeInfo: ".ControlPosition",
          },
          {
            name: "punchingUnitOrPunchPattern",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "PunchingUnit",
                },
                typeInfo: ".PunchingUnit",
              },
              {
                elementName: {
                  localPart: "PunchPattern",
                },
              },
            ],
            type: "elements",
          },
          {
            name: "punchingUnitType",
            elementName: {
              localPart: "PunchingUnitType",
            },
            typeInfo: ".PunchingUnitType",
          },
          {
            name: "mapPosition",
            elementName: {
              localPart: "MapPosition",
            },
            typeInfo: ".MapPosition",
          },
          {
            name: "comment",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Comment",
            },
            typeInfo: ".Comment",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "Course",
        typeName: null,
        propertyInfos: [
          {
            name: "courseName",
            required: true,
            elementName: {
              localPart: "CourseName",
            },
          },
          {
            name: "courseId",
            elementName: {
              localPart: "CourseId",
            },
          },
          {
            name: "eventId",
            elementName: {
              localPart: "EventId",
            },
            typeInfo: ".EventId",
          },
          {
            name: "eventRaceId",
            elementName: {
              localPart: "EventRaceId",
            },
          },
          {
            name: "classIdOrClassShortName",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "ClassId",
                },
                typeInfo: ".ClassId",
              },
              {
                elementName: {
                  localPart: "ClassShortName",
                },
                typeInfo: ".ClassShortName",
              },
            ],
            type: "elements",
          },
          {
            name: "courseVariation",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "CourseVariation",
            },
            typeInfo: ".CourseVariation",
          },
          {
            name: "courseSectionList",
            elementName: {
              localPart: "CourseSectionList",
            },
            typeInfo: ".CourseSectionList",
          },
        ],
      },
      {
        localName: "PreSelectedClass",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "clazz",
            required: true,
            elementName: {
              localPart: "Class",
            },
            typeInfo: ".Class",
          },
          {
            name: "sequence",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "sequence",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EventClassificationId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ClassRaceStatus",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: [
              "notAllocated",
              "allocated",
              "started",
              "finished",
              "deleted",
            ],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "NotQualifiedSubstituteClass",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "clazz",
            required: true,
            elementName: {
              localPart: "Class",
            },
            typeInfo: ".Class",
          },
        ],
      },
      {
        localName: "ContactType",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            values: [
              "official",
              "entry",
              "result",
              "info",
              "financial",
              "other",
            ],
            defaultValue: "official",
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TransferedToClass",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
        ],
      },
      {
        localName: "EventClass",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "clazz",
            required: true,
            elementName: {
              localPart: "Class",
            },
            typeInfo: ".Class",
          },
          {
            name: "eventRaceIdAndClassRaceInfoAndPunchingUnitType",
            required: true,
            minOccurs: 3,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "EventRaceId",
                },
              },
              {
                elementName: {
                  localPart: "ClassRaceInfo",
                },
                typeInfo: ".ClassRaceInfo",
              },
              {
                elementName: {
                  localPart: "PunchingUnitType",
                },
                typeInfo: ".PunchingUnitType",
              },
            ],
            type: "elements",
          },
          {
            name: "transferedToClass",
            elementName: {
              localPart: "TransferedToClass",
            },
            typeInfo: ".TransferedToClass",
          },
          {
            name: "dividedIntoClass",
            required: true,
            elementName: {
              localPart: "DividedIntoClass",
            },
            typeInfo: ".DividedIntoClass",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "PersonResult",
        typeName: null,
        propertyInfos: [
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "rank",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Rank",
            },
            typeInfo: ".Rank",
          },
          {
            name: "result",
            required: true,
            elementName: {
              localPart: "Result",
            },
            typeInfo: ".Result",
          },
          {
            name: "raceResult",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "RaceResult",
            },
            typeInfo: ".RaceResult",
          },
        ],
      },
      {
        localName: "ServiceRequest",
        typeName: null,
        propertyInfos: [
          {
            name: "serviceId",
            required: true,
            elementName: {
              localPart: "ServiceId",
            },
          },
          {
            name: "service",
            required: true,
            elementName: {
              localPart: "Service",
            },
            typeInfo: ".Service",
          },
          {
            name: "serviceOrderNumber",
            elementName: {
              localPart: "ServiceOrderNumber",
            },
          },
          {
            name: "requestedQuantity",
            required: true,
            elementName: {
              localPart: "RequestedQuantity",
            },
            typeInfo: ".RequestedQuantity",
          },
          {
            name: "deliveredQuantity",
            elementName: {
              localPart: "DeliveredQuantity",
            },
            typeInfo: ".DeliveredQuantity",
          },
          {
            name: "comment",
            elementName: {
              localPart: "Comment",
            },
            typeInfo: ".Comment",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "FinishDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "StartPoint",
        typeName: null,
        propertyInfos: [
          {
            name: "startPointCode",
            required: true,
            elementName: {
              localPart: "StartPointCode",
            },
          },
          {
            name: "description",
            elementName: {
              localPart: "Description",
            },
            typeInfo: ".Description",
          },
          {
            name: "controlPosition",
            elementName: {
              localPart: "ControlPosition",
            },
            typeInfo: ".ControlPosition",
          },
          {
            name: "mapPosition",
            elementName: {
              localPart: "MapPosition",
            },
            typeInfo: ".MapPosition",
          },
          {
            name: "comment",
            elementName: {
              localPart: "Comment",
            },
            typeInfo: ".Comment",
          },
          {
            name: "distanceFromStart",
            elementName: {
              localPart: "DistanceFromStart",
            },
            typeInfo: ".DistanceFromStart",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "ResultSelection",
        typeName: null,
        propertyInfos: [
          {
            name: "organisationIdOrOrganisation",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "OrganisationId",
                },
                typeInfo: ".OrganisationId",
              },
              {
                elementName: {
                  localPart: "Organisation",
                },
                typeInfo: ".Organisation",
              },
            ],
            type: "elements",
          },
          {
            name: "clubIdOrClub",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "ClubId",
                },
                typeInfo: ".ClubId",
              },
              {
                elementName: {
                  localPart: "Club",
                },
                typeInfo: ".Club",
              },
            ],
            type: "elements",
          },
          {
            name: "classIdOrClassShortNameOrClazz",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "ClassId",
                },
                typeInfo: ".ClassId",
              },
              {
                elementName: {
                  localPart: "ClassShortName",
                },
                typeInfo: ".ClassShortName",
              },
              {
                elementName: {
                  localPart: "Class",
                },
                typeInfo: ".Class",
              },
            ],
            type: "elements",
          },
          {
            name: "position",
            required: true,
            elementName: {
              localPart: "Position",
            },
          },
          {
            name: "modifyDate",
            required: true,
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "StartMethod",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: ["allocatTime", "punching", "limitedPunching", "other"],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "SubOrganisation",
        typeName: null,
        propertyInfos: [
          {
            name: "organisationId",
            required: true,
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "organisation",
            required: true,
            elementName: {
              localPart: "Organisation",
            },
            typeInfo: ".Organisation",
          },
        ],
      },
      {
        localName: "StartTime",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            required: true,
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "BadgeList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "badgeValue",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "BadgeValue",
            },
            typeInfo: ".BadgeValue",
          },
          {
            name: "badgeLimit",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "BadgeLimit",
            },
            typeInfo: ".BadgeLimit",
          },
        ],
      },
      {
        localName: "ClubServiceRequest",
        typeName: null,
        propertyInfos: [
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ServiceRequest",
            },
            typeInfo: ".ServiceRequest",
          },
          {
            name: "personServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "PersonServiceRequest",
            },
            typeInfo: ".PersonServiceRequest",
          },
        ],
      },
      {
        localName: "IOFVersion",
        typeName: null,
        propertyInfos: [
          {
            name: "version",
            values: ["2.0.3"],
            defaultValue: "2.0.3",
            attributeName: {
              localPart: "version",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "CompetitorList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "competitor",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Competitor",
            },
            typeInfo: ".Competitor",
          },
        ],
      },
      {
        localName: "ForeignAccount",
        typeName: null,
        propertyInfos: [
          {
            name: "account",
            required: true,
            elementName: {
              localPart: "Account",
            },
            typeInfo: ".Account",
          },
        ],
      },
      {
        localName: "FirstStart",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            required: true,
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "MaxNumber",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "unit",
            typeInfo: "AnySimpleType",
            defaultValue: "Pcs",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Entry",
        typeName: null,
        propertyInfos: [
          {
            name: "entryId",
            elementName: {
              localPart: "EntryId",
            },
          },
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "cCard",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "CCard",
            },
            typeInfo: ".CCard",
          },
          {
            name: "rank",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Rank",
            },
            typeInfo: ".Rank",
          },
          {
            name: "teamName",
            required: true,
            elementName: {
              localPart: "TeamName",
            },
          },
          {
            name: "clubIdOrClubAndTeamSequence",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "ClubId",
                },
                typeInfo: ".ClubId",
              },
              {
                elementName: {
                  localPart: "Club",
                },
                typeInfo: ".Club",
              },
              {
                elementName: {
                  localPart: "TeamSequence",
                },
              },
            ],
            type: "elements",
          },
          {
            name: "entryClass",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EntryClass",
            },
            typeInfo: ".EntryClass",
          },
          {
            name: "allocationControl",
            elementName: {
              localPart: "AllocationControl",
            },
            typeInfo: ".AllocationControl",
          },
          {
            name: "entryDate",
            required: true,
            elementName: {
              localPart: "EntryDate",
            },
            typeInfo: ".EntryDate",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "nonCompetitor",
            values: ["Y", "N"],
            defaultValue: "N",
            attributeName: {
              localPart: "nonCompetitor",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ValidToDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
        ],
      },
      {
        localName: "PrizeCeremonyTime",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            required: true,
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "Nationality",
        typeName: null,
        propertyInfos: [
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
        ],
      },
      {
        localName: "ClubList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "club",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
        ],
      },
      {
        localName: "DistanceFromStart",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "unit",
            values: ["m", "km", "ft"],
            defaultValue: "m",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "CourseSectionList",
        typeName: null,
        propertyInfos: [
          {
            name: "startPointCode",
            elementName: {
              localPart: "StartPointCode",
            },
          },
          {
            name: "courseSection",
            required: true,
            collection: true,
            elementName: {
              localPart: "CourseSection",
            },
            typeInfo: ".CourseSection",
          },
          {
            name: "finishPointCode",
            elementName: {
              localPart: "FinishPointCode",
            },
          },
          {
            name: "distanceToFinish",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "DistanceToFinish",
            },
            typeInfo: ".DistanceToFinish",
          },
        ],
      },
      {
        localName: "EstimatedLastPrizeTime",
        typeName: null,
        propertyInfos: [
          {
            name: "time",
            required: true,
            elementName: {
              localPart: "Time",
            },
            typeInfo: ".Time",
          },
        ],
      },
      {
        localName: "ClassType",
        typeName: null,
        propertyInfos: [
          {
            name: "classTypeId",
            required: true,
            elementName: {
              localPart: "ClassTypeId",
            },
            typeInfo: ".ClassTypeId",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "ShortName",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "languageId",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "languageId",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "MapTextPosition",
        typeName: null,
        propertyInfos: [
          {
            name: "mapPosition",
            required: true,
            elementName: {
              localPart: "MapPosition",
            },
            typeInfo: ".MapPosition",
          },
        ],
      },
      {
        localName: "ControlPosition",
        typeName: null,
        propertyInfos: [
          {
            name: "x",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "x",
            },
            type: "attribute",
          },
          {
            name: "y",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "y",
            },
            type: "attribute",
          },
          {
            name: "unit",
            values: ["m", "ft", "km", "WGS-84", "other"],
            defaultValue: "m",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EventId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Transaction",
        typeName: null,
        propertyInfos: [
          {
            name: "account",
            required: true,
            elementName: {
              localPart: "Account",
            },
            typeInfo: ".Account",
          },
          {
            name: "foreignAccount",
            elementName: {
              localPart: "ForeignAccount",
            },
            typeInfo: ".ForeignAccount",
          },
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "amount",
            required: true,
            elementName: {
              localPart: "Amount",
            },
            typeInfo: ".Amount",
          },
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "organisationId",
            required: true,
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "organisation",
            required: true,
            elementName: {
              localPart: "Organisation",
            },
            typeInfo: ".Organisation",
          },
          {
            name: "personIdOrPerson",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "PersonId",
                },
                typeInfo: ".PersonId",
              },
              {
                elementName: {
                  localPart: "Person",
                },
                typeInfo: ".Person",
              },
            ],
            type: "elements",
          },
          {
            name: "entryId",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EntryId",
            },
          },
          {
            name: "serviceOrderNumberOrServiceIdOrService",
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "ServiceId",
                },
              },
              {
                elementName: {
                  localPart: "Service",
                },
                typeInfo: ".Service",
              },
              {
                elementName: {
                  localPart: "ServiceOrderNumber",
                },
              },
            ],
            type: "elementRefs",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "Club",
        typeName: null,
        propertyInfos: [
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "name",
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "shortName",
            required: true,
            elementName: {
              localPart: "ShortName",
            },
            typeInfo: ".ShortName",
          },
          {
            name: "organisationId",
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Address",
            },
            typeInfo: ".Address",
          },
          {
            name: "tele",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Tele",
            },
            typeInfo: ".Tele",
          },
          {
            name: "webURL",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "WebURL",
            },
          },
          {
            name: "account",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Account",
            },
            typeInfo: ".Account",
          },
          {
            name: "contact",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Contact",
            },
            typeInfo: ".Contact",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "FinishTime",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            required: true,
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "CourseClimb",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "unit",
            values: ["m", "km", "ft"],
            defaultValue: "m",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "AddressType",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: ["official", "home", "work", "other"],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PunchingUnitType",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: ["manual", "SI", "Emit", "other"],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EntryData",
        typeName: null,
        propertyInfos: [
          {
            name: "addressAndTele",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "Address",
                },
                typeInfo: ".Address",
              },
              {
                elementName: {
                  localPart: "Tele",
                },
                typeInfo: ".Tele",
              },
            ],
            type: "elements",
          },
        ],
      },
      {
        localName: "EntryFeeId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "StartList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "eventId",
            required: true,
            elementName: {
              localPart: "EventId",
            },
            typeInfo: ".EventId",
          },
          {
            name: "event",
            required: true,
            elementName: {
              localPart: "Event",
            },
            typeInfo: ".Event",
          },
          {
            name: "classStart",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ClassStart",
            },
            typeInfo: ".ClassStart",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "BirthDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
        ],
      },
      {
        localName: "CourseBranch",
        typeName: null,
        propertyInfos: [
          {
            name: "courseBranchId",
            required: true,
            elementName: {
              localPart: "CourseBranchId",
            },
          },
          {
            name: "courseControl",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "CourseControl",
            },
            typeInfo: ".CourseControl",
          },
        ],
      },
      {
        localName: "RequestedQuantity",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "unit",
            typeInfo: "AnySimpleType",
            defaultValue: "Pcs",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonName",
        typeName: null,
        propertyInfos: [
          {
            name: "family",
            required: true,
            elementName: {
              localPart: "Family",
            },
          },
          {
            name: "given",
            required: true,
            collection: true,
            elementName: {
              localPart: "Given",
            },
            typeInfo: ".Given",
          },
        ],
      },
      {
        localName: "LegLength",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "fromControl",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "FromControl",
            },
            type: "attribute",
          },
          {
            name: "unit",
            values: ["m", "km", "ft"],
            defaultValue: "m",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Start",
        typeName: null,
        propertyInfos: [
          {
            name: "startNumber",
            elementName: {
              localPart: "StartNumber",
            },
          },
          {
            name: "bibNumber",
            elementName: {
              localPart: "BibNumber",
            },
          },
          {
            name: "cCardId",
            required: true,
            elementName: {
              localPart: "CCardId",
            },
          },
          {
            name: "cCard",
            required: true,
            elementName: {
              localPart: "CCard",
            },
            typeInfo: ".CCard",
          },
          {
            name: "startTime",
            elementName: {
              localPart: "StartTime",
            },
            typeInfo: ".StartTime",
          },
          {
            name: "teamSequence",
            elementName: {
              localPart: "TeamSequence",
            },
          },
          {
            name: "courseLength",
            required: true,
            elementName: {
              localPart: "CourseLength",
            },
            typeInfo: ".CourseLength",
          },
          {
            name: "startId",
            elementName: {
              localPart: "StartId",
            },
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "CourseData",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "map",
            elementName: {
              localPart: "Map",
            },
            typeInfo: ".Map",
          },
          {
            name: "startPoint",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "StartPoint",
            },
            typeInfo: ".StartPoint",
          },
          {
            name: "control",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Control",
            },
            typeInfo: ".Control",
          },
          {
            name: "finishPoint",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "FinishPoint",
            },
            typeInfo: ".FinishPoint",
          },
          {
            name: "course",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Course",
            },
            typeInfo: ".Course",
          },
        ],
      },
      {
        localName: "Box",
        typeName: null,
        propertyInfos: [
          {
            name: "symbol",
            required: true,
            collection: true,
            elementName: {
              localPart: "Symbol",
            },
            typeInfo: ".Symbol",
          },
          {
            name: "text",
            required: true,
            elementName: {
              localPart: "Text",
            },
            typeInfo: ".Text",
          },
          {
            name: "column",
            required: true,
            values: ["A", "B", "C", "D", "E", "F", "G", "H"],
            attributeName: {
              localPart: "column",
            },
            type: "attribute",
          },
          {
            name: "hasDiagonal",
            values: ["Y", "N"],
            defaultValue: "N",
            attributeName: {
              localPart: "hasDiagonal",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeleType",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: ["official", "home", "work", "other"],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Tele",
        typeName: null,
        propertyInfos: [
          {
            name: "teleType",
            elementName: {
              localPart: "TeleType",
            },
            typeInfo: ".TeleType",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "phoneNumber",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "phoneNumber",
            },
            type: "attribute",
          },
          {
            name: "faxNumber",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "faxNumber",
            },
            type: "attribute",
          },
          {
            name: "mobilePhoneNumber",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "mobilePhoneNumber",
            },
            type: "attribute",
          },
          {
            name: "mailAddress",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "mailAddress",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Amount",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "currency",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "currency",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EntryDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "OrganisationList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "organisationType",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "OrganisationType",
            },
            typeInfo: ".OrganisationType",
          },
          {
            name: "organisation",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Organisation",
            },
            typeInfo: ".Organisation",
          },
        ],
      },
      {
        localName: "Competitor",
        typeName: null,
        propertyInfos: [
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "preSelectedClass",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "PreSelectedClass",
            },
            typeInfo: ".PreSelectedClass",
          },
          {
            name: "cCard",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "CCard",
            },
            typeInfo: ".CCard",
          },
          {
            name: "rank",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Rank",
            },
            typeInfo: ".Rank",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "Organiser",
        typeName: null,
        propertyInfos: [
          {
            name: "clubIdOrClub",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "ClubId",
                },
                typeInfo: ".ClubId",
              },
              {
                elementName: {
                  localPart: "Club",
                },
                typeInfo: ".Club",
              },
            ],
            type: "elements",
          },
        ],
      },
      {
        localName: "Symbol",
        typeName: null,
        propertyInfos: [
          {
            name: "symbolId",
            required: true,
            elementName: {
              localPart: "SymbolId",
            },
          },
          {
            name: "name",
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
        ],
      },
      {
        localName: "BadgeValueId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Name",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "languageId",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "languageId",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Press",
        typeName: null,
        propertyInfos: [
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "contact",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Contact",
            },
            typeInfo: ".Contact",
          },
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Address",
            },
            typeInfo: ".Address",
          },
          {
            name: "tele",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Tele",
            },
            typeInfo: ".Tele",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "resultSelection",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ResultSelection",
            },
            typeInfo: ".ResultSelection",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "mediaType",
            required: true,
            values: ["paper", "tv", "radio", "magazine", "web", "other"],
            attributeName: {
              localPart: "mediaType",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Contact",
        typeName: null,
        propertyInfos: [
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "contactType",
            required: true,
            elementName: {
              localPart: "ContactType",
            },
            typeInfo: ".ContactType",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "Description",
        typeName: null,
        propertyInfos: [
          {
            name: "box",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Box",
            },
            typeInfo: ".Box",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "Address",
        typeName: null,
        propertyInfos: [
          {
            name: "addressType",
            elementName: {
              localPart: "AddressType",
            },
            typeInfo: ".AddressType",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "careOf",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "careOf",
            },
            type: "attribute",
          },
          {
            name: "street",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "street",
            },
            type: "attribute",
          },
          {
            name: "city",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "city",
            },
            type: "attribute",
          },
          {
            name: "zipCode",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "zipCode",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EntryList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "clubEntry",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ClubEntry",
            },
            typeInfo: ".ClubEntry",
          },
        ],
      },
      {
        localName: "DeliveredQuantity",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "unit",
            typeInfo: "AnySimpleType",
            defaultValue: "Pcs",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "person",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
        ],
      },
      {
        localName: "ClassData",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "classType",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ClassType",
            },
            typeInfo: ".ClassType",
          },
          {
            name: "clazz",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Class",
            },
            typeInfo: ".Class",
          },
        ],
      },
      {
        localName: "ClubId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "BadgeLimit",
        typeName: null,
        propertyInfos: [
          {
            name: "badgeValueId",
            required: true,
            elementName: {
              localPart: "BadgeValueId",
            },
            typeInfo: ".BadgeValueId",
          },
          {
            name: "badgeValue",
            required: true,
            elementName: {
              localPart: "BadgeValue",
            },
            typeInfo: ".BadgeValue",
          },
          {
            name: "eventClassificationId",
            required: true,
            elementName: {
              localPart: "EventClassificationId",
            },
            typeInfo: ".EventClassificationId",
          },
          {
            name: "eventClassification",
            required: true,
            elementName: {
              localPart: "EventClassification",
            },
            typeInfo: ".EventClassification",
          },
          {
            name: "classTypeId",
            required: true,
            elementName: {
              localPart: "ClassTypeId",
            },
            typeInfo: ".ClassTypeId",
          },
          {
            name: "classType",
            required: true,
            elementName: {
              localPart: "ClassType",
            },
            typeInfo: ".ClassType",
          },
          {
            name: "timeFactor",
            required: true,
            elementName: {
              localPart: "TimeFactor",
            },
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "EventRace",
        typeName: null,
        propertyInfos: [
          {
            name: "eventRaceId",
            required: true,
            elementName: {
              localPart: "EventRaceId",
            },
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "raceDate",
            required: true,
            elementName: {
              localPart: "RaceDate",
            },
            typeInfo: ".RaceDate",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "EstimatedBestTime",
        typeName: null,
        propertyInfos: [
          {
            name: "time",
            required: true,
            elementName: {
              localPart: "Time",
            },
            typeInfo: ".Time",
          },
        ],
      },
      {
        localName: "CountryId",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: [
              "ARG",
              "AUS",
              "AUT",
              "BEL",
              "BLR",
              "BRA",
              "BUL",
              "CAN",
              "CHI",
              "CHN",
              "COL",
              "CRO",
              "CUB",
              "CZE",
              "DEN",
              "ECU",
              "ESP",
              "EST",
              "FIN",
              "FRA",
              "GBR",
              "GER",
              "GRE",
              "HKG",
              "HUN",
              "INA",
              "IND",
              "IRL",
              "ISR",
              "ITA",
              "JAM",
              "JPN",
              "KAZ",
              "KOR",
              "LAT",
              "LTU",
              "MAS",
              "MDA",
              "MKD",
              "NED",
              "NOR",
              "NZL",
              "PAK",
              "POL",
              "POR",
              "PRK",
              "ROM",
              "RSA",
              "RUS",
              "SLO",
              "SUI",
              "SVK",
              "SWE",
              "TPE",
              "UKR",
              "URU",
              "USA",
              "VEN",
              "YOG",
              "other",
            ],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EventList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "eventClassification",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EventClassification",
            },
            typeInfo: ".EventClassification",
          },
          {
            name: "event",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Event",
            },
            typeInfo: ".Event",
          },
        ],
      },
      {
        localName: "DistanceToFinish",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "fromControl",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "FromControl",
            },
            type: "attribute",
          },
          {
            name: "unit",
            values: ["m", "km", "ft"],
            defaultValue: "m",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Country",
        typeName: null,
        propertyInfos: [
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "name",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "PersonStart",
        typeName: null,
        propertyInfos: [
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "rank",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Rank",
            },
            typeInfo: ".Rank",
          },
          {
            name: "start",
            required: true,
            elementName: {
              localPart: "Start",
            },
            typeInfo: ".Start",
          },
          {
            name: "raceStart",
            required: true,
            collection: true,
            elementName: {
              localPart: "RaceStart",
            },
            typeInfo: ".RaceStart",
          },
        ],
      },
      {
        localName: "Account",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["postalGiro", "bankGiro", "bankAccount", "other"],
            defaultValue: "postalGiro",
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Comment",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "languageId",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "languageId",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "AllocationControl",
        typeName: null,
        propertyInfos: [
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "allocationControlType",
            required: true,
            elementName: {
              localPart: "AllocationControlType",
            },
            typeInfo: ".AllocationControlType",
          },
        ],
      },
      {
        localName: "DividedIntoClass",
        typeName: null,
        propertyInfos: [
          {
            name: "eventClass",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "EventClass",
            },
            typeInfo: ".EventClass",
          },
        ],
      },
      {
        localName: "PersonId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "OrganisationId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "EntryFee",
        typeName: null,
        propertyInfos: [
          {
            name: "entryFeeId",
            elementName: {
              localPart: "EntryFeeId",
            },
            typeInfo: ".EntryFeeId",
          },
          {
            name: "name",
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "amount",
            required: true,
            elementName: {
              localPart: "Amount",
            },
            typeInfo: ".Amount",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "taxIncluded",
            values: ["Y", "N"],
            defaultValue: "Y",
            attributeName: {
              localPart: "taxIncluded",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ResultList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "eventId",
            required: true,
            elementName: {
              localPart: "EventId",
            },
            typeInfo: ".EventId",
          },
          {
            name: "event",
            required: true,
            elementName: {
              localPart: "Event",
            },
            typeInfo: ".Event",
          },
          {
            name: "classResult",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ClassResult",
            },
            typeInfo: ".ClassResult",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "status",
            values: ["complete", "snapshot", "delta"],
            defaultValue: "complete",
            attributeName: {
              localPart: "status",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "SplitTime",
        typeName: null,
        propertyInfos: [
          {
            name: "controlCode",
            required: true,
            elementName: {
              localPart: "ControlCode",
            },
          },
          {
            name: "control",
            required: true,
            elementName: {
              localPart: "Control",
            },
            typeInfo: ".Control",
          },
          {
            name: "time",
            elementName: {
              localPart: "Time",
            },
            typeInfo: ".Time",
          },
          {
            name: "sequence",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "sequence",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Given",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "sequence",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "sequence",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PunchingUnit",
        typeName: null,
        propertyInfos: [
          {
            name: "unitCode",
            required: true,
            elementName: {
              localPart: "UnitCode",
            },
          },
          {
            name: "punchingUnitType",
            required: true,
            elementName: {
              localPart: "PunchingUnitType",
            },
            typeInfo: ".PunchingUnitType",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "SubOrganisationType",
        typeName: null,
        propertyInfos: [
          {
            name: "organisationTypeId",
            required: true,
            elementName: {
              localPart: "OrganisationTypeId",
            },
            typeInfo: ".OrganisationTypeId",
          },
          {
            name: "organisationType",
            required: true,
            elementName: {
              localPart: "OrganisationType",
            },
            typeInfo: ".OrganisationType",
          },
        ],
      },
      {
        localName: "Organisation",
        typeName: null,
        propertyInfos: [
          {
            name: "organisationId",
            required: true,
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "shortName",
            elementName: {
              localPart: "ShortName",
            },
            typeInfo: ".ShortName",
          },
          {
            name: "organisationTypeId",
            required: true,
            elementName: {
              localPart: "OrganisationTypeId",
            },
            typeInfo: ".OrganisationTypeId",
          },
          {
            name: "organisationType",
            required: true,
            elementName: {
              localPart: "OrganisationType",
            },
            typeInfo: ".OrganisationType",
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Address",
            },
            typeInfo: ".Address",
          },
          {
            name: "tele",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Tele",
            },
            typeInfo: ".Tele",
          },
          {
            name: "account",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Account",
            },
            typeInfo: ".Account",
          },
          {
            name: "contact",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Contact",
            },
            typeInfo: ".Contact",
          },
          {
            name: "subOrganisation",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "SubOrganisation",
            },
            typeInfo: ".SubOrganisation",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "RankList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "organisationId",
            required: true,
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "organisation",
            required: true,
            elementName: {
              localPart: "Organisation",
            },
            typeInfo: ".Organisation",
          },
          {
            name: "competitor",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Competitor",
            },
            typeInfo: ".Competitor",
          },
        ],
      },
      {
        localName: "OrganisationServiceRequest",
        typeName: null,
        propertyInfos: [
          {
            name: "organisationId",
            required: true,
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "organisation",
            required: true,
            elementName: {
              localPart: "Organisation",
            },
            typeInfo: ".Organisation",
          },
          {
            name: "serviceRequest",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ServiceRequest",
            },
            typeInfo: ".ServiceRequest",
          },
          {
            name: "personServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "PersonServiceRequest",
            },
            typeInfo: ".PersonServiceRequest",
          },
        ],
      },
      {
        localName: "ClassTypeId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Class",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "name",
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "classTypeId",
            required: true,
            elementName: {
              localPart: "ClassTypeId",
            },
            typeInfo: ".ClassTypeId",
          },
          {
            name: "classType",
            required: true,
            elementName: {
              localPart: "ClassType",
            },
            typeInfo: ".ClassType",
          },
          {
            name: "substituteClass",
            elementName: {
              localPart: "SubstituteClass",
            },
            typeInfo: ".SubstituteClass",
          },
          {
            name: "notQualifiedSubstituteClass",
            elementName: {
              localPart: "NotQualifiedSubstituteClass",
            },
            typeInfo: ".NotQualifiedSubstituteClass",
          },
          {
            name: "entryFeeIdOrEntryFee",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "EntryFeeId",
                },
                typeInfo: ".EntryFeeId",
              },
              {
                elementName: {
                  localPart: "EntryFee",
                },
                typeInfo: ".EntryFee",
              },
            ],
            type: "elements",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "lowAge",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "lowAge",
            },
            type: "attribute",
          },
          {
            name: "highAge",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "highAge",
            },
            type: "attribute",
          },
          {
            name: "sex",
            required: true,
            values: ["M", "F", "B"],
            attributeName: {
              localPart: "sex",
            },
            type: "attribute",
          },
          {
            name: "numberInTeam",
            typeInfo: "AnySimpleType",
            defaultValue: "1",
            attributeName: {
              localPart: "numberInTeam",
            },
            type: "attribute",
          },
          {
            name: "teamEntry",
            values: ["Y", "N"],
            defaultValue: "N",
            attributeName: {
              localPart: "teamEntry",
            },
            type: "attribute",
          },
          {
            name: "maxNumberInClass",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "maxNumberInClass",
            },
            type: "attribute",
          },
          {
            name: "actualForRanking",
            values: ["Y", "N"],
            defaultValue: "N",
            attributeName: {
              localPart: "actualForRanking",
            },
            type: "attribute",
          },
          {
            name: "timePresentation",
            values: ["Y", "N"],
            defaultValue: "Y",
            attributeName: {
              localPart: "timePresentation",
            },
            type: "attribute",
          },
          {
            name: "allowedMinAge",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "allowedMinAge",
            },
            type: "attribute",
          },
          {
            name: "allowedMaxAge",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "allowedMaxAge",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "ServiceRequestList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "clubServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "ClubServiceRequest",
            },
            typeInfo: ".ClubServiceRequest",
          },
          {
            name: "organisationServiceRequest",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "OrganisationServiceRequest",
            },
            typeInfo: ".OrganisationServiceRequest",
          },
        ],
      },
      {
        localName: "StartInterval",
        typeName: null,
        propertyInfos: [
          {
            name: "time",
            required: true,
            elementName: {
              localPart: "Time",
            },
            typeInfo: ".Time",
          },
        ],
      },
      {
        localName: "Result",
        typeName: null,
        propertyInfos: [
          {
            name: "startNumber",
            elementName: {
              localPart: "StartNumber",
            },
          },
          {
            name: "bibNumber",
            elementName: {
              localPart: "BibNumber",
            },
          },
          {
            name: "cCardId",
            required: true,
            elementName: {
              localPart: "CCardId",
            },
          },
          {
            name: "cCard",
            required: true,
            elementName: {
              localPart: "CCard",
            },
            typeInfo: ".CCard",
          },
          {
            name: "startTime",
            elementName: {
              localPart: "StartTime",
            },
            typeInfo: ".StartTime",
          },
          {
            name: "finishTime",
            elementName: {
              localPart: "FinishTime",
            },
            typeInfo: ".FinishTime",
          },
          {
            name: "time",
            elementName: {
              localPart: "Time",
            },
            typeInfo: ".Time",
          },
          {
            name: "resultPosition",
            elementName: {
              localPart: "ResultPosition",
            },
          },
          {
            name: "competitorStatus",
            required: true,
            elementName: {
              localPart: "CompetitorStatus",
            },
            typeInfo: ".CompetitorStatus",
          },
          {
            name: "teamSequence",
            elementName: {
              localPart: "TeamSequence",
            },
          },
          {
            name: "courseVariationId",
            required: true,
            elementName: {
              localPart: "CourseVariationId",
            },
          },
          {
            name: "courseVariation",
            required: true,
            elementName: {
              localPart: "CourseVariation",
            },
            typeInfo: ".CourseVariation",
          },
          {
            name: "courseLength",
            required: true,
            elementName: {
              localPart: "CourseLength",
            },
            typeInfo: ".CourseLength",
          },
          {
            name: "splitTime",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "SplitTime",
            },
            typeInfo: ".SplitTime",
          },
          {
            name: "badgeValueId",
            required: true,
            elementName: {
              localPart: "BadgeValueId",
            },
            typeInfo: ".BadgeValueId",
          },
          {
            name: "badgeValue",
            required: true,
            elementName: {
              localPart: "BadgeValue",
            },
            typeInfo: ".BadgeValue",
          },
          {
            name: "point",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Point",
            },
            typeInfo: ".Point",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "AllocationMethod",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            values: [
              "normal",
              "seeded",
              "group",
              "invertedResult",
              "preseedingResult",
              "manual",
              "other",
            ],
            defaultValue: "normal",
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PersonServiceRequest",
        typeName: null,
        propertyInfos: [
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "person",
            required: true,
            elementName: {
              localPart: "Person",
            },
            typeInfo: ".Person",
          },
          {
            name: "serviceRequest",
            required: true,
            collection: true,
            elementName: {
              localPart: "ServiceRequest",
            },
            typeInfo: ".ServiceRequest",
          },
        ],
      },
      {
        localName: "TeamResult",
        typeName: null,
        propertyInfos: [
          {
            name: "teamName",
            required: true,
            elementName: {
              localPart: "TeamName",
            },
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "startNumber",
            elementName: {
              localPart: "StartNumber",
            },
          },
          {
            name: "bibNumber",
            elementName: {
              localPart: "BibNumber",
            },
          },
          {
            name: "startTime",
            elementName: {
              localPart: "StartTime",
            },
            typeInfo: ".StartTime",
          },
          {
            name: "finishTime",
            elementName: {
              localPart: "FinishTime",
            },
            typeInfo: ".FinishTime",
          },
          {
            name: "time",
            elementName: {
              localPart: "Time",
            },
            typeInfo: ".Time",
          },
          {
            name: "resultPosition",
            elementName: {
              localPart: "ResultPosition",
            },
          },
          {
            name: "teamStatus",
            required: true,
            elementName: {
              localPart: "TeamStatus",
            },
            typeInfo: ".TeamStatus",
          },
          {
            name: "rank",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Rank",
            },
            typeInfo: ".Rank",
          },
          {
            name: "point",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Point",
            },
            typeInfo: ".Point",
          },
          {
            name: "personResult",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "PersonResult",
            },
            typeInfo: ".PersonResult",
          },
        ],
      },
      {
        localName: "ClassId",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "type",
            values: ["int", "nat", "reg", "loc", "other"],
            attributeName: {
              localPart: "type",
            },
            type: "attribute",
          },
          {
            name: "idManager",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "idManager",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "PressList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "press",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Press",
            },
            typeInfo: ".Press",
          },
        ],
      },
      {
        localName: "SubstituteClass",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "clazz",
            required: true,
            elementName: {
              localPart: "Class",
            },
            typeInfo: ".Class",
          },
        ],
      },
      {
        localName: "Rank",
        typeName: null,
        propertyInfos: [
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "organisationId",
            required: true,
            elementName: {
              localPart: "OrganisationId",
            },
            typeInfo: ".OrganisationId",
          },
          {
            name: "organisation",
            required: true,
            elementName: {
              localPart: "Organisation",
            },
            typeInfo: ".Organisation",
          },
          {
            name: "rankPosition",
            required: true,
            elementName: {
              localPart: "RankPosition",
            },
          },
          {
            name: "rankValue",
            required: true,
            elementName: {
              localPart: "RankValue",
            },
          },
          {
            name: "validFromDate",
            elementName: {
              localPart: "ValidFromDate",
            },
            typeInfo: ".ValidFromDate",
          },
          {
            name: "validToDate",
            elementName: {
              localPart: "ValidToDate",
            },
            typeInfo: ".ValidToDate",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "RaceDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "ClubEntry",
        typeName: null,
        propertyInfos: [
          {
            name: "clubId",
            required: true,
            elementName: {
              localPart: "ClubId",
            },
            typeInfo: ".ClubId",
          },
          {
            name: "club",
            required: true,
            elementName: {
              localPart: "Club",
            },
            typeInfo: ".Club",
          },
          {
            name: "contact",
            elementName: {
              localPart: "Contact",
            },
            typeInfo: ".Contact",
          },
          {
            name: "entry",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Entry",
            },
            typeInfo: ".Entry",
          },
        ],
      },
      {
        localName: "Map",
        typeName: null,
        propertyInfos: [
          {
            name: "scale",
            required: true,
            elementName: {
              localPart: "Scale",
            },
          },
          {
            name: "mapPosition",
            required: true,
            elementName: {
              localPart: "MapPosition",
            },
            typeInfo: ".MapPosition",
          },
        ],
      },
      {
        localName: "ModifyDate",
        typeName: null,
        propertyInfos: [
          {
            name: "date",
            required: true,
            elementName: {
              localPart: "Date",
            },
            typeInfo: ".Date",
          },
          {
            name: "clock",
            elementName: {
              localPart: "Clock",
            },
            typeInfo: ".Clock",
          },
        ],
      },
      {
        localName: "Time",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "timeFormat",
            typeInfo: "AnySimpleType",
            defaultValue: "MM:SS",
            attributeName: {
              localPart: "timeFormat",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamStart",
        typeName: null,
        propertyInfos: [
          {
            name: "teamName",
            required: true,
            elementName: {
              localPart: "TeamName",
            },
          },
          {
            name: "countryId",
            required: true,
            elementName: {
              localPart: "CountryId",
            },
            typeInfo: ".CountryId",
          },
          {
            name: "country",
            required: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
          {
            name: "personStart",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "PersonStart",
            },
            typeInfo: ".PersonStart",
          },
        ],
      },
      {
        localName: "BadgeValue",
        typeName: null,
        propertyInfos: [
          {
            name: "badgeValueId",
            required: true,
            elementName: {
              localPart: "BadgeValueId",
            },
            typeInfo: ".BadgeValueId",
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "shortName",
            elementName: {
              localPart: "ShortName",
            },
            typeInfo: ".ShortName",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "CountryList",
        typeName: null,
        propertyInfos: [
          {
            name: "iofVersion",
            elementName: {
              localPart: "IOFVersion",
            },
            typeInfo: ".IOFVersion",
          },
          {
            name: "country",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Country",
            },
            typeInfo: ".Country",
          },
        ],
      },
      {
        localName: "Text",
        typeName: null,
        propertyInfos: [
          {
            name: "content",
            type: "value",
          },
          {
            name: "languageId",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "languageId",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "MapPosition",
        typeName: null,
        propertyInfos: [
          {
            name: "x",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "x",
            },
            type: "attribute",
          },
          {
            name: "y",
            required: true,
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "y",
            },
            type: "attribute",
          },
          {
            name: "unit",
            values: ["mm", "other"],
            defaultValue: "mm",
            attributeName: {
              localPart: "unit",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Person",
        typeName: null,
        propertyInfos: [
          {
            name: "personName",
            required: true,
            elementName: {
              localPart: "PersonName",
            },
            typeInfo: ".PersonName",
          },
          {
            name: "personId",
            required: true,
            elementName: {
              localPart: "PersonId",
            },
            typeInfo: ".PersonId",
          },
          {
            name: "birthDate",
            elementName: {
              localPart: "BirthDate",
            },
            typeInfo: ".BirthDate",
          },
          {
            name: "address",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Address",
            },
            typeInfo: ".Address",
          },
          {
            name: "tele",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Tele",
            },
            typeInfo: ".Tele",
          },
          {
            name: "nationality",
            elementName: {
              localPart: "Nationality",
            },
            typeInfo: ".Nationality",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
          {
            name: "sex",
            values: ["M", "F"],
            attributeName: {
              localPart: "sex",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "Service",
        typeName: null,
        propertyInfos: [
          {
            name: "serviceId",
            required: true,
            elementName: {
              localPart: "ServiceId",
            },
          },
          {
            name: "name",
            required: true,
            elementName: {
              localPart: "Name",
            },
            typeInfo: ".Name",
          },
          {
            name: "amount",
            required: true,
            elementName: {
              localPart: "Amount",
            },
            typeInfo: ".Amount",
          },
          {
            name: "comment",
            elementName: {
              localPart: "Comment",
            },
            typeInfo: ".Comment",
          },
          {
            name: "maxNumber",
            elementName: {
              localPart: "MaxNumber",
            },
            typeInfo: ".MaxNumber",
          },
          {
            name: "modifyDate",
            elementName: {
              localPart: "ModifyDate",
            },
            typeInfo: ".ModifyDate",
          },
        ],
      },
      {
        localName: "ClassResult",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "eventClass",
            required: true,
            elementName: {
              localPart: "EventClass",
            },
            typeInfo: ".EventClass",
          },
          {
            name: "personResultOrTeamResult",
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [
              {
                elementName: {
                  localPart: "PersonResult",
                },
                typeInfo: ".PersonResult",
              },
              {
                elementName: {
                  localPart: "TeamResult",
                },
                typeInfo: ".TeamResult",
              },
            ],
            type: "elements",
          },
        ],
      },
      {
        localName: "EntryClass",
        typeName: null,
        propertyInfos: [
          {
            name: "classId",
            required: true,
            elementName: {
              localPart: "ClassId",
            },
            typeInfo: ".ClassId",
          },
          {
            name: "classShortName",
            required: true,
            elementName: {
              localPart: "ClassShortName",
            },
            typeInfo: ".ClassShortName",
          },
          {
            name: "eventClass",
            required: true,
            elementName: {
              localPart: "EventClass",
            },
            typeInfo: ".EventClass",
          },
          {
            name: "sequence",
            typeInfo: "AnySimpleType",
            attributeName: {
              localPart: "sequence",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "CourseControl",
        typeName: null,
        propertyInfos: [
          {
            name: "sequence",
            required: true,
            elementName: {
              localPart: "Sequence",
            },
          },
          {
            name: "controlCode",
            required: true,
            elementName: {
              localPart: "ControlCode",
            },
          },
          {
            name: "control",
            required: true,
            elementName: {
              localPart: "Control",
            },
            typeInfo: ".Control",
          },
          {
            name: "comment",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "Comment",
            },
            typeInfo: ".Comment",
          },
          {
            name: "legLength",
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: "LegLength",
            },
            typeInfo: ".LegLength",
          },
          {
            name: "mapTextPosition",
            elementName: {
              localPart: "MapTextPosition",
            },
            typeInfo: ".MapTextPosition",
          },
          {
            name: "markedRoute",
            values: ["Y", "N"],
            defaultValue: "N",
            attributeName: {
              localPart: "markedRoute",
            },
            type: "attribute",
          },
        ],
      },
      {
        localName: "TeamStatus",
        typeName: null,
        propertyInfos: [
          {
            name: "value",
            required: true,
            values: [
              "Inactive",
              "DidNotStart",
              "Active",
              "Finished",
              "OK",
              "MisPunch",
              "DidNotFinish",
              "Disqualified",
              "NotCompeting",
              "SportWithdr",
              "OverTime",
              "Moved",
              "MovedUp",
              "Cancelled",
            ],
            attributeName: {
              localPart: "value",
            },
            type: "attribute",
          },
        ],
      },
    ],
    elementInfos: [
      {
        typeInfo: ".Time",
        elementName: {
          localPart: "Time",
        },
      },
      {
        typeInfo: ".PunchingUnitType",
        elementName: {
          localPart: "PunchingUnitType",
        },
      },
      {
        typeInfo: ".ClubEntry",
        elementName: {
          localPart: "ClubEntry",
        },
      },
      {
        typeInfo: ".Press",
        elementName: {
          localPart: "Press",
        },
      },
      {
        typeInfo: ".StartMethod",
        elementName: {
          localPart: "StartMethod",
        },
      },
      {
        typeInfo: ".CourseBranch",
        elementName: {
          localPart: "CourseBranch",
        },
      },
      {
        typeInfo: ".EventList",
        elementName: {
          localPart: "EventList",
        },
      },
      {
        typeInfo: ".Course",
        elementName: {
          localPart: "Course",
        },
      },
      {
        typeInfo: ".Box",
        elementName: {
          localPart: "Box",
        },
      },
      {
        typeInfo: ".ControlPosition",
        elementName: {
          localPart: "ControlPosition",
        },
      },
      {
        typeInfo: ".PressList",
        elementName: {
          localPart: "PressList",
        },
      },
      {
        typeInfo: ".MapTextPosition",
        elementName: {
          localPart: "MapTextPosition",
        },
      },
      {
        elementName: {
          localPart: "BibNumber",
        },
      },
      {
        elementName: {
          localPart: "StartNumber",
        },
      },
      {
        typeInfo: ".PersonName",
        elementName: {
          localPart: "PersonName",
        },
      },
      {
        typeInfo: ".NotQualifiedSubstituteClass",
        elementName: {
          localPart: "NotQualifiedSubstituteClass",
        },
      },
      {
        typeInfo: ".Description",
        elementName: {
          localPart: "Description",
        },
      },
      {
        typeInfo: ".StartPoint",
        elementName: {
          localPart: "StartPoint",
        },
      },
      {
        typeInfo: ".RequestedQuantity",
        elementName: {
          localPart: "RequestedQuantity",
        },
      },
      {
        typeInfo: ".Map",
        elementName: {
          localPart: "Map",
        },
      },
      {
        typeInfo: ".RaceResult",
        elementName: {
          localPart: "RaceResult",
        },
      },
      {
        typeInfo: ".EventOfficial",
        elementName: {
          localPart: "EventOfficial",
        },
      },
      {
        typeInfo: ".DistanceToFinish",
        elementName: {
          localPart: "DistanceToFinish",
        },
      },
      {
        typeInfo: ".PersonId",
        elementName: {
          localPart: "PersonId",
        },
      },
      {
        typeInfo: ".LegLength",
        elementName: {
          localPart: "LegLength",
        },
      },
      {
        elementName: {
          localPart: "StartPointCode",
        },
      },
      {
        typeInfo: ".ClassTypeId",
        elementName: {
          localPart: "ClassTypeId",
        },
      },
      {
        typeInfo: ".EventId",
        elementName: {
          localPart: "EventId",
        },
      },
      {
        typeInfo: ".EntryData",
        elementName: {
          localPart: "EntryData",
        },
      },
      {
        elementName: {
          localPart: "Position",
        },
      },
      {
        elementName: {
          localPart: "Info",
        },
      },
      {
        typeInfo: ".DistanceFromStart",
        elementName: {
          localPart: "DistanceFromStart",
        },
      },
      {
        elementName: {
          localPart: "ResultPosition",
        },
      },
      {
        elementName: {
          localPart: "TimeFactor",
        },
      },
      {
        typeInfo: ".EventClass",
        elementName: {
          localPart: "EventClass",
        },
      },
      {
        typeInfo: ".ForeignAccount",
        elementName: {
          localPart: "ForeignAccount",
        },
      },
      {
        typeInfo: ".BirthDate",
        elementName: {
          localPart: "BirthDate",
        },
      },
      {
        typeInfo: ".TransactionList",
        elementName: {
          localPart: "TransactionList",
        },
      },
      {
        typeInfo: ".CountryId",
        elementName: {
          localPart: "CountryId",
        },
      },
      {
        typeInfo: ".Entry",
        elementName: {
          localPart: "Entry",
        },
      },
      {
        elementName: {
          localPart: "CourseBranchId",
        },
      },
      {
        typeInfo: ".ClubList",
        elementName: {
          localPart: "ClubList",
        },
      },
      {
        typeInfo: ".BadgeValueId",
        elementName: {
          localPart: "BadgeValueId",
        },
      },
      {
        typeInfo: ".CompetitorStatus",
        elementName: {
          localPart: "CompetitorStatus",
        },
      },
      {
        elementName: {
          localPart: "RankPosition",
        },
      },
      {
        typeInfo: ".FirstStart",
        elementName: {
          localPart: "FirstStart",
        },
      },
      {
        typeInfo: ".StartList",
        elementName: {
          localPart: "StartList",
        },
      },
      {
        elementName: {
          localPart: "RankValue",
        },
      },
      {
        typeInfo: ".ClassResult",
        elementName: {
          localPart: "ClassResult",
        },
      },
      {
        typeInfo: ".OrganisationType",
        elementName: {
          localPart: "OrganisationType",
        },
      },
      {
        typeInfo: ".TeamStatus",
        elementName: {
          localPart: "TeamStatus",
        },
      },
      {
        typeInfo: ".AddressType",
        elementName: {
          localPart: "AddressType",
        },
      },
      {
        typeInfo: ".Text",
        elementName: {
          localPart: "Text",
        },
      },
      {
        typeInfo: ".ModifyDate",
        elementName: {
          localPart: "ModifyDate",
        },
      },
      {
        typeInfo: ".Service",
        elementName: {
          localPart: "Service",
        },
      },
      {
        typeInfo: ".Address",
        elementName: {
          localPart: "Address",
        },
      },
      {
        typeInfo: ".Country",
        elementName: {
          localPart: "Country",
        },
      },
      {
        typeInfo: ".CountryList",
        elementName: {
          localPart: "CountryList",
        },
      },
      {
        typeInfo: ".EntryFee",
        elementName: {
          localPart: "EntryFee",
        },
      },
      {
        typeInfo: ".ValidFromDate",
        elementName: {
          localPart: "ValidFromDate",
        },
      },
      {
        typeInfo: ".FinishTime",
        elementName: {
          localPart: "FinishTime",
        },
      },
      {
        typeInfo: ".Competitor",
        elementName: {
          localPart: "Competitor",
        },
      },
      {
        typeInfo: ".OrganisationList",
        elementName: {
          localPart: "OrganisationList",
        },
      },
      {
        typeInfo: ".Tele",
        elementName: {
          localPart: "Tele",
        },
      },
      {
        elementName: {
          localPart: "CourseName",
        },
      },
      {
        typeInfo: ".EventClassificationId",
        elementName: {
          localPart: "EventClassificationId",
        },
      },
      {
        typeInfo: ".FinishDate",
        elementName: {
          localPart: "FinishDate",
        },
      },
      {
        typeInfo: ".ContactType",
        elementName: {
          localPart: "ContactType",
        },
      },
      {
        typeInfo: ".RaceDate",
        elementName: {
          localPart: "RaceDate",
        },
      },
      {
        typeInfo: ".ClassStart",
        elementName: {
          localPart: "ClassStart",
        },
      },
      {
        typeInfo: ".AllocationControl",
        elementName: {
          localPart: "AllocationControl",
        },
      },
      {
        typeInfo: ".CourseClimb",
        elementName: {
          localPart: "CourseClimb",
        },
      },
      {
        typeInfo: ".CourseSection",
        elementName: {
          localPart: "CourseSection",
        },
      },
      {
        elementName: {
          localPart: "CourseVariationId",
        },
      },
      {
        typeInfo: ".Club",
        elementName: {
          localPart: "Club",
        },
      },
      {
        typeInfo: ".Point",
        elementName: {
          localPart: "Point",
        },
      },
      {
        typeInfo: ".Symbol",
        elementName: {
          localPart: "Symbol",
        },
      },
      {
        typeInfo: ".TeamResult",
        elementName: {
          localPart: "TeamResult",
        },
      },
      {
        elementName: {
          localPart: "TeamName",
        },
      },
      {
        typeInfo: ".MaxNumber",
        elementName: {
          localPart: "MaxNumber",
        },
      },
      {
        typeInfo: ".TeamStart",
        elementName: {
          localPart: "TeamStart",
        },
      },
      {
        typeInfo: ".OrganisationServiceRequest",
        elementName: {
          localPart: "OrganisationServiceRequest",
        },
      },
      {
        typeInfo: ".Transaction",
        elementName: {
          localPart: "Transaction",
        },
      },
      {
        typeInfo: ".StartInterval",
        elementName: {
          localPart: "StartInterval",
        },
      },
      {
        elementName: {
          localPart: "TeamSequence",
        },
      },
      {
        typeInfo: ".SplitTime",
        elementName: {
          localPart: "SplitTime",
        },
      },
      {
        typeInfo: ".TeleType",
        elementName: {
          localPart: "TeleType",
        },
      },
      {
        typeInfo: ".PersonList",
        elementName: {
          localPart: "PersonList",
        },
      },
      {
        typeInfo: ".ClubId",
        elementName: {
          localPart: "ClubId",
        },
      },
      {
        typeInfo: ".Organiser",
        elementName: {
          localPart: "Organiser",
        },
      },
      {
        elementName: {
          localPart: "FinishPointCode",
        },
      },
      {
        typeInfo: ".SubOrganisation",
        elementName: {
          localPart: "SubOrganisation",
        },
      },
      {
        elementName: {
          localPart: "Scale",
        },
      },
      {
        typeInfo: ".BadgeValue",
        elementName: {
          localPart: "BadgeValue",
        },
      },
      {
        elementName: {
          localPart: "CourseId",
        },
      },
      {
        typeInfo: ".ClassData",
        elementName: {
          localPart: "ClassData",
        },
      },
      {
        typeInfo: ".PreSelectedClass",
        elementName: {
          localPart: "PreSelectedClass",
        },
      },
      {
        typeInfo: ".TransferedToClass",
        elementName: {
          localPart: "TransferedToClass",
        },
      },
      {
        typeInfo: ".CourseData",
        elementName: {
          localPart: "CourseData",
        },
      },
      {
        typeInfo: ".ValidToDate",
        elementName: {
          localPart: "ValidToDate",
        },
      },
      {
        typeInfo: ".CourseSectionList",
        elementName: {
          localPart: "CourseSectionList",
        },
      },
      {
        typeInfo: ".StartTime",
        elementName: {
          localPart: "StartTime",
        },
      },
      {
        typeInfo: ".ClassId",
        elementName: {
          localPart: "ClassId",
        },
      },
      {
        elementName: {
          localPart: "SymbolId",
        },
      },
      {
        typeInfo: ".Rank",
        elementName: {
          localPart: "Rank",
        },
      },
      {
        elementName: {
          localPart: "CCardId",
        },
      },
      {
        typeInfo: ".ClassShortName",
        elementName: {
          localPart: "ClassShortName",
        },
      },
      {
        typeInfo: ".EstimatedLastPrizeTime",
        elementName: {
          localPart: "EstimatedLastPrizeTime",
        },
      },
      {
        typeInfo: ".Event",
        elementName: {
          localPart: "Event",
        },
      },
      {
        elementName: {
          localPart: "FinishId",
        },
      },
      {
        typeInfo: ".Person",
        elementName: {
          localPart: "Person",
        },
      },
      {
        typeInfo: ".EstimatedBestTime",
        elementName: {
          localPart: "EstimatedBestTime",
        },
      },
      {
        typeInfo: ".EventClassification",
        elementName: {
          localPart: "EventClassification",
        },
      },
      {
        typeInfo: ".PersonServiceRequest",
        elementName: {
          localPart: "PersonServiceRequest",
        },
      },
      {
        elementName: {
          localPart: "FinishChute",
        },
      },
      {
        elementName: {
          localPart: "CourseSectionId",
        },
      },
      {
        typeInfo: ".OrganisationId",
        elementName: {
          localPart: "OrganisationId",
        },
      },
      {
        typeInfo: ".Name",
        elementName: {
          localPart: "Name",
        },
      },
      {
        typeInfo: ".Start",
        elementName: {
          localPart: "Start",
        },
      },
      {
        typeInfo: ".SubstituteClass",
        elementName: {
          localPart: "SubstituteClass",
        },
      },
      {
        typeInfo: ".Class",
        elementName: {
          localPart: "Class",
        },
      },
      {
        typeInfo: ".ClubServiceRequest",
        elementName: {
          localPart: "ClubServiceRequest",
        },
      },
      {
        typeInfo: ".ServiceRequest",
        elementName: {
          localPart: "ServiceRequest",
        },
      },
      {
        elementName: {
          localPart: "ControlCode",
        },
      },
      {
        typeInfo: ".EventRace",
        elementName: {
          localPart: "EventRace",
        },
      },
      {
        typeInfo: ".ServiceRequestList",
        elementName: {
          localPart: "ServiceRequestList",
        },
      },
      {
        typeInfo: ".CourseLength",
        elementName: {
          localPart: "CourseLength",
        },
      },
      {
        typeInfo: ".Date",
        elementName: {
          localPart: "Date",
        },
      },
      {
        typeInfo: ".Account",
        elementName: {
          localPart: "Account",
        },
      },
      {
        typeInfo: ".FinishPoint",
        elementName: {
          localPart: "FinishPoint",
        },
      },
      {
        typeInfo: ".ClassType",
        elementName: {
          localPart: "ClassType",
        },
      },
      {
        typeInfo: ".OrganisationTypeId",
        elementName: {
          localPart: "OrganisationTypeId",
        },
      },
      {
        typeInfo: ".EntryClass",
        elementName: {
          localPart: "EntryClass",
        },
      },
      {
        typeInfo: ".ResultList",
        elementName: {
          localPart: "ResultList",
        },
      },
      {
        typeInfo: ".CompetitorList",
        elementName: {
          localPart: "CompetitorList",
        },
      },
      {
        elementName: {
          localPart: "PunchPattern",
        },
      },
      {
        typeInfo: ".Organisation",
        elementName: {
          localPart: "Organisation",
        },
      },
      {
        typeInfo: ".RankList",
        elementName: {
          localPart: "RankList",
        },
      },
      {
        typeInfo: ".BadgeLimit",
        elementName: {
          localPart: "BadgeLimit",
        },
      },
      {
        elementName: {
          localPart: "Sequence",
        },
      },
      {
        typeInfo: ".SubOrganisationType",
        elementName: {
          localPart: "SubOrganisationType",
        },
      },
      {
        typeInfo: ".Contact",
        elementName: {
          localPart: "Contact",
        },
      },
      {
        typeInfo: ".ClassRaceStatus",
        elementName: {
          localPart: "ClassRaceStatus",
        },
      },
      {
        elementName: {
          localPart: "Family",
        },
      },
      {
        typeInfo: ".RaceStart",
        elementName: {
          localPart: "RaceStart",
        },
      },
      {
        typeInfo: ".CourseVariation",
        elementName: {
          localPart: "CourseVariation",
        },
      },
      {
        elementName: {
          localPart: "EventRaceId",
        },
      },
      {
        typeInfo: ".PunchingUnit",
        elementName: {
          localPart: "PunchingUnit",
        },
      },
      {
        elementName: {
          localPart: "ServiceOrderNumber",
        },
      },
      {
        typeInfo: ".ShortName",
        elementName: {
          localPart: "ShortName",
        },
      },
      {
        elementName: {
          localPart: "EventOfficialRole",
        },
      },
      {
        typeInfo: ".ResultSelection",
        elementName: {
          localPart: "ResultSelection",
        },
      },
      {
        typeInfo: ".Comment",
        elementName: {
          localPart: "Comment",
        },
      },
      {
        typeInfo: ".IOFVersion",
        elementName: {
          localPart: "IOFVersion",
        },
      },
      {
        typeInfo: ".Given",
        elementName: {
          localPart: "Given",
        },
      },
      {
        elementName: {
          localPart: "ServiceId",
        },
      },
      {
        elementName: {
          localPart: "StartId",
        },
      },
      {
        typeInfo: ".Nationality",
        elementName: {
          localPart: "Nationality",
        },
      },
      {
        typeInfo: ".PersonStart",
        elementName: {
          localPart: "PersonStart",
        },
      },
      {
        typeInfo: ".AllocationMethod",
        elementName: {
          localPart: "AllocationMethod",
        },
      },
      {
        typeInfo: ".StartDate",
        elementName: {
          localPart: "StartDate",
        },
      },
      {
        typeInfo: ".PersonResult",
        elementName: {
          localPart: "PersonResult",
        },
      },
      {
        typeInfo: ".AllocationControlType",
        elementName: {
          localPart: "AllocationControlType",
        },
      },
      {
        typeInfo: ".CourseControl",
        elementName: {
          localPart: "CourseControl",
        },
      },
      {
        elementName: {
          localPart: "EntryId",
        },
      },
      {
        typeInfo: ".Clock",
        elementName: {
          localPart: "Clock",
        },
      },
      {
        typeInfo: ".DeliveredQuantity",
        elementName: {
          localPart: "DeliveredQuantity",
        },
      },
      {
        typeInfo: ".BadgeList",
        elementName: {
          localPart: "BadgeList",
        },
      },
      {
        typeInfo: ".EntryFeeId",
        elementName: {
          localPart: "EntryFeeId",
        },
      },
      {
        elementName: {
          localPart: "WebURL",
        },
      },
      {
        typeInfo: ".Amount",
        elementName: {
          localPart: "Amount",
        },
      },
      {
        typeInfo: ".PrizeCeremonyTime",
        elementName: {
          localPart: "PrizeCeremonyTime",
        },
      },
      {
        typeInfo: ".DividedIntoClass",
        elementName: {
          localPart: "DividedIntoClass",
        },
      },
      {
        typeInfo: ".EntryList",
        elementName: {
          localPart: "EntryList",
        },
      },
      {
        elementName: {
          localPart: "UnitCode",
        },
      },
      {
        typeInfo: ".CCard",
        elementName: {
          localPart: "CCard",
        },
      },
      {
        typeInfo: ".Control",
        elementName: {
          localPart: "Control",
        },
      },
      {
        typeInfo: ".ClassRaceInfo",
        elementName: {
          localPart: "ClassRaceInfo",
        },
      },
      {
        typeInfo: ".EntryDate",
        elementName: {
          localPart: "EntryDate",
        },
      },
      {
        typeInfo: ".Result",
        elementName: {
          localPart: "Result",
        },
      },
      {
        typeInfo: ".MapPosition",
        elementName: {
          localPart: "MapPosition",
        },
      },
    ],
  };
  return {
    generated: generated,
  };
};
if (typeof define === "function" && define.amd) {
  define([], generated_Module_Factory);
} else {
  var generated_Module = generated_Module_Factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports.generated = generated_Module.generated;
  } else {
    var generated = generated_Module.generated;
  }
}
