! function() {
    try {
        ! function(e) {
            "use strict";
            var t = "sp-info-c-",
                i = "referred-products",
                n = "WishListProducts";
            window.spApi.systemRuleRecommendationFeed = {
                serviceUrl: "https://recommendation.api.useinsider.com/",
                userBased: "{partnerId}/{language}/user/{userId}?details=true&size={size}&currency={currency}",
                similarViewed: '{partnerId}/{language}/similar/product/{itemId}?categoryList=["{categoryList}"]&details=true&size={size}&currency={currency}',
                similarBought: '{partnerId}/{language}/complementary/product/{itemId}?categoryList=["{categoryList}"]&details=true&size={size}&currency={currency}',
                mostViewedOfCat: '{partnerId}/{language}/most/viewed/product?categoryList=["{categoryList}"]&details=true&size={size}&currency={currency}',
                mostBoughtOfCat: '{partnerId}/{language}/most/purchased/product?categoryList=["{categoryList}"]&details=true&size={size}&currency={currency}',
                mostViewed: "{partnerId}/{language}/most/viewed/partner?details=true&size={size}&currency={currency}",
                mostPurchased: "{partnerId}/{language}/most/purchased/partner?details=true&size={size}&currency={currency}",
                mixedStrategy: '{partnerId}/{language}/mixed?strategy=[{mixedStrategies}]&userId={userId}&productId={itemId}&categoryList=["{categoryList}"]&details=true&size={size}&currency={currency}&productIds={productIds}',
                manualMerchandising: "{partnerId}/{language}/product/details/{productId}?details=true",
                highestDiscounted: '{partnerId}/{language}/highest/discounted/partner/?details=true&currency={currency}&categoryList=["{categoryList}"]&size={size}',
                trendingProducts: '{partnerId}/{language}/trending/products?details=true&categoryList=["{categoryList}"]&size={size}&currency={currency}',
                newArrivals: '{partnerId}/{language}/new-arrivals?details=true&categoryList=["{categoryList}"]&size={size}&currency={currency}',
                locationBased: "{partnerId}/{language}/most/purchased/product?details=true&size={size}&country={country}&city={city}&currency={currency}",
                checkoutRecommendation: '{partnerId}/{language}/complementary/product/{itemId}?categoryList=["{categoryList}"]&details=true&size={size}&currency={currency}',
                chef: "{partnerId}/{language}/chef?details=true&size={size}&userId={userId}&currency={currency}",
                mostValuableOfPartner: "{partnerId}/{language}/most/valuable/product?details=true&size={size}&currency={currency}",
                mostValuableOfCat: '{partnerId}/{language}/most/valuable/product?details=true&size={size}&currency={currency}&categoryList=["{categoryList}"]',
                substituteProducts: '{partnerId}/{language}/substitute/product/{itemId}?details=true&size={size}&currency={currency}&categoryList=["{categoryList}"]&price={price}',
                complementaryProducts: 'v2/complementary?partnerName={partnerName}&locale={language}&productId={itemId}&currency={currency}&details=true&size={size}&categoryList=["{categoryList}"]',
                advancedMixedStrategy: 'v2/mixed?details=true&size={size}&partnerName={partnerName}&locale={language}&currency={currency}&categoryList=["{categoryList}"]&strategy=[{advancedMixedStrategies}]&productId={itemId}',
                amazonPersonalize: "v2/personalize?details=true&size={size}&userId={userId}&locale={language}&partnerName={partnerName}"
            };
            var s = Insider.partner.name,
                r = "slide-type",
                a = "data-answer-type",
                o = "data-survey-id",
                c = "data-element-name",
                d = "data-ins-c-l-i",
                u = "ins-prev-page",
                l = "thanks",
                p = "button",
                h = "a",
                m = ":first",
                f = ".story-viewer",
                g = ".ins-slider-page",
                v = ".ins-scratch-coupon-close-button",
                I = ".ins-poll-content",
                y = ".ins-element-copy-to-clipboard-button",
                x = -1,
                b = {
                    partner: s,
                    "Content-Type": "application/json"
                },
                C = 0,
                w = {
                    updateWishListProducts: function(e) {
                        Insider.storage.set({
                            name: n,
                            value: e,
                            expires: 100
                        })
                    },
                    getWishListProductIds: function() {
                        return Insider.storage.get(n) || {}
                    },
                    getWishListProducts: function(e, t) {
                        var i = w.getWishListProductIds(),
                            n = [],
                            s = Insider.systemRules.call("getLocale") || Insider.systemRules.call("getLang") || "";
                        "all" === (e = e || "default") ? Object.keys(i).forEach((function(e) {
                            n = n.concat(i[e])
                        })): n = i[e] || [], 0 !== n.length ? Insider.request.get({
                            url: window.spApi.systemRuleRecommendationFeed.serviceUrl + Insider.partner.partnerId + "/" + s + "/product/details/" + n.join(",") + "?details=true",
                            success: function(e) {
                                t(JSON.parse(e.response || {}).data)
                            }
                        }) : t([])
                    },
                    addProductToWishList: function(e, t) {
                        var i = w.getWishListProductIds();
                        return i[t = t || "default"] = i[t] || [], i[t].push(e), w.updateWishListProducts(i), i
                    },
                    deleteProductFromWishList: function(e, t) {
                        var i = w.getWishListProductIds();
                        return "all" === (t = t || "default") ? Object.keys(i).forEach((function(t) {
                            i[t] = L(i[t], e)
                        })) : i[t] = L(i[t], e), w.updateWishListProducts(i), i
                    }
                },
                S = function(t) {
                    this.campID = t, this.campCookieKey = "sp-camp-" + this.campID, this.infoSettings = Insider.campaign.get(this.campID).pageSettings, this.mainSelector = e(".ins-preview-wrapper-" + this.campID), this.couponCodeStorageKey = "sp-info-c-" + this.campID, this.assistantActive = 2 === Insider.campaign.get(this.campID).noteType, this.elementSelectors = {
                        notificationContent: "ins-notification-content",
                        elementLink: "ins-element-link",
                        overlayContent: '#ins-frameless-overlay[data-camp-id="' + this.campID + '"]',
                        minimizeButton: "div.ins-element-minimize-button:not(.ins-element-link)",
                        closeButton: "ins-element-close-button",
                        overlayCloseSelector: '#ins-frameless-overlay[data-camp-id="' + this.campID + '"]:not([close-on-click="false"])',
                        dataScrollAttribute: "data-scroll-element",
                        formContainer: "ins-question-group-form",
                        errorClass: "ins-validation-error",
                        inputErrorText: "ins-input-error-text",
                        addToCartButtonWrapper: ".ins-add-to-cart-wrapper",
                        inStoryPollButtons: "#instory-modal-content .ins-option-first-button, #instory-modal-content .ins-option-second-button",
                        voted: ".voted"
                    };
                    var n = function(e, t) {
                        var i = "";
                        return "id" === t ? i = "#" : "class" === t && (i = "."), i + this.elementSelectors[e]
                    }.bind(this);
                    this.initialize = function() {
                        this.setEvents()
                    }, this.setEvents = function() {
                        var t = ".ins-preview-wrapper-" + this.campID + " ";
                        Insider.eventManager.on("setCopyButton" + this.campID, g), e(document).on("closeCampaign" + this.campID, (function() {
                            x()
                        })), Insider.eventManager.on("getCoupon" + this.campID, function(e, i) {
                            T({
                                callback: i,
                                campaignId: this.campID,
                                listId: Number(Insider.dom(t).find(y).attr(d) || 0)
                            })
                        }.bind(this)), Insider.eventManager.on("click", t + n("elementLink", "class"), (function(t) {
                            var i = (e(this).parent().attr("id") || "").split("-")[0];
                            e(this).closest(n("formContainer", "id")).exists() && i === p && m() || a(i) || r(t, this)
                        })), Insider.eventManager.on("click.minimize" + this.campID, t + n("minimizeButton"), (function() {
                            v()
                        })), Insider.eventManager.on("click.close" + this.campID, t + n("closeButton", "class"), (function() {
                            x()
                        })), e(document).on("click.overlayClose" + this.campID, n("overlayCloseSelector"), (function() {
                            x()
                        })), Insider.eventManager.on("recommendationViewEventCollection" + this.campID, (function(e, t) {
                            P(t)
                        })), Insider.eventManager.on("set:instory:poll:results" + this.campID, (function(e, t) {
                            if (t.clickedButton.closest(n("voted")).exists()) return !1;
                            var i = {
                                first: "A",
                                second: "B"
                            }[t.clickedButton.attr("data-button-type")];
                            if (!i) return !1;
                            var s = Number(t.clickedButton.closest(f).attr("data-story-id").split("-")[1] || 0) + 1,
                                r = Number(t.clickedButton.closest(I).attr(o) || 0);
                            L({
                                tableName: "isl",
                                storyId: s,
                                surveyId: r,
                                vote: i,
                                type: "poll"
                            }), O({
                                storyId: s,
                                vote: i,
                                pollId: r,
                                callback: t.callback,
                                currentElement: t.clickedButton
                            })
                        }))
                    }, this.removeOverlay = function() {
                        e(n("overlayContent")).remove()
                    }, this.removeCampaign = function() {
                        this.mainSelector.remove(), this.removeOverlay()
                    }.bind(this), this.closeWithEffect = function() {
                        setTimeout(x.bind(this), 0)
                    }, this.makeMainSelectorInvisible = function() {
                        Insider.dom(".ins-preview-wrapper-" + this.campID).css({
                            display: "none",
                            visibility: "hidden"
                        })
                    }, this.sendCloseLog = function() {
                        Insider.campaign.info.storeCloseLog(this.campID)
                    }, this.showAssistant = function(e) {
                        var t = T({
                            campaignId: this.campID
                        });
                        Insider.campaign.info.showCouponAssistant({
                            variationId: this.campID,
                            couponCode: t,
                            redirectUrl: e
                        }), this.closeWithEffect()
                    };
                    var r = function(t, i) {
                            var s, r = "A" === t.target.tagName,
                                a = e(r ? t.target : i),
                                o = "_blank" === a.attr("target"),
                                c = e.trim(a.attr("href")),
                                d = e(t.target).attr("href") || "",
                                u = (a.parent().attr("id") || "").split("-")[0],
                                l = a.hasClass("ins-close-on-click"),
                                p = a.closest(".ins-element-content").attr("data-ga-join-text") || "",
                                m = a.hasClass("ins-show-assistant"),
                                f = a.hasClass("ins-element-copy-to-clipboard-button"),
                                g = a.closest('div[id*="button"]'),
                                v = z(g, this.elementSelectors.dataScrollAttribute),
                                I = a.closest(n("formContainer", "id")).exists(),
                                y = z(a, "event-collection");
                            s = !1, (E(c) || v || I || y) && (s = !0), (I && o || f) && (s = !1), s && t.preventDefault();
                            var x = {
                                    id: a.attr("id"),
                                    text: "button" === u ? e.trim(a.text()) : ""
                                },
                                b = Insider.campaign.getCampaignStorage(this.campID);
                            if (b && b.joined || Insider.campaign.info.storeJoinLog(this.campID, {
                                    otherProperties: x,
                                    extra: {
                                        eventAction: p
                                    }
                                }), this.assistantActive && m) return this.showAssistant(c), !1;
                            var C = e(e(g).attr(this.elementSelectors.dataScrollAttribute));
                            return I || q(C), l && !f && (this.sendCloseLog(), this.closeWithEffect()), E(d) && E(c) || I || v ? void 0 : (h(c || d, y, a, o), !1)
                        }.bind(this),
                        a = function(e) {
                            return Insider.fns.has(["web-survey-questionnaire", "survey-questionnaire"], Insider.campaign.get(this.campID).pa) && e === l
                        }.bind(this),
                        u = function(e, t, i) {
                            if (!i) return !1;
                            t ? window.open(e, "_blank") : window.location.href = e
                        },
                        h = function(e, t, i, n) {
                            if (t) return k("click", i, e, n), !1;
                            u(e, n, !1)
                        },
                        m = function() {
                            return this.mainSelector.find(n("errorClass", "class")).length > 0 || this.mainSelector.find(n("inputErrorText", "class")).length > 0
                        }.bind(this),
                        g = function(e, t) {
                            new InsClipboard(".ins-preview-wrapper-" + this.campID + " " + t).on("success", (function(e) {
                                sQuery(e.trigger).hasClass("ins-close-on-click") && x(), e.clearSelection()
                            }))
                        }.bind(this),
                        v = function() {
                            Insider.campaign.updateCampaignCookie({
                                triggerHide: 0
                            }, this.campID), this.makeMainSelectorInvisible(), sQuery("#insTriggerContent").show();
                            var e = S();
                            "none" !== e.effect && sQuery("#insTriggerContent").effect(e.effect), this.removeOverlay()
                        }.bind(this),
                        x = function() {
                            var t = w();
                            C(this.campID) && Insider.campaign.info.storeCloseLog(this.campID), t && t.close ? e(document).trigger("info:campaign:closed:" + this.campID) : Insider.campaign.info.removeCampaign(this.campID)
                        }.bind(this),
                        C = function(e) {
                            var t = Insider.campaign.getCampaignStorage(e) || {},
                                i = Insider.dateHelper.now(),
                                n = Insider.campaign.info.get(e),
                                s = (t.clDa || i) + n.ccl * Insider.dateHelper.ONE_HOUR_AS_SECONDS;
                            return !t.closed || s < i
                        },
                        w = function() {
                            return Insider.campaign.get(t).effectConfig
                        },
                        S = function() {
                            return Insider.campaign.get(t).triggerSettings
                        },
                        D = function() {
                            var e = Insider.campaign.get(t).predictiveFeedSettings.feedSource;
                            return {
                                userBased: "ub",
                                mostViewed: "mvop",
                                mostPurchased: "mpop",
                                similarViewed: "vtv",
                                similarBought: "btb",
                                mostViewedOfCat: "mvoc",
                                mostBoughtOfCat: "mpoc",
                                manualMerchandising: "pd",
                                newArrivals: "naop",
                                trendingProducts: "tpop",
                                highestDiscounted: "hdop",
                                substituteProducts: "sp",
                                complementaryProducts: "cp"
                            }[e] || e
                        },
                        k = function(e, i, r, a) {
                            _({
                                event: "recommendation_click",
                                partner_name: s,
                                user_id: Insider.getUserId(),
                                session_id: Insider.getUserSession(),
                                algorithm: D(),
                                campaign_id: t,
                                items: [i.closest("li").find(n("addToCartButtonWrapper")).attr("ins-product-id")],
                                recommended_items: A(i)
                            }, (function() {
                                u(r, a, !0)
                            }))
                        },
                        A = function(e) {
                            var t = e.closest("[data-recommended-items]");
                            return 0 === t.length ? [] : JSON.parse(t.attr("data-recommended-items") || "[]")
                        },
                        P = function(e) {
                            _({
                                event: "recommendation_view",
                                partner_name: s,
                                user_id: Insider.getUserId(),
                                session_id: Insider.getUserSession(),
                                algorithm: D(),
                                campaign_id: t,
                                items: JSON.parse(e || "[]")
                            })
                        },
                        L = function(e) {
                            new Insider.log(e.tableName).append({
                                campaignId: this.campID,
                                storyId: e.storyId,
                                surveyId: e.surveyId,
                                vote: e.vote,
                                logType: e.type
                            }).send()
                        }.bind(this),
                        O = function(e) {
                            var t = {
                                partner: s,
                                story_id: e.storyId,
                                poll_id: e.pollId,
                                camp_id: this.campID,
                                vote: e.vote
                            };
                            Insider.request.post({
                                url: "https://carrier.useinsider.com/v2/form/instory/vote/poll",
                                headers: b,
                                data: Insider.fns.stringify(t),
                                success: function(t) {
                                    var i = Insider.fns.parse(t.body || "{}");
                                    e.callback({
                                        results: i,
                                        currentElement: e.currentElement
                                    });
                                    var n = {
                                        pollResults: i,
                                        clickedPoll: e.currentElement.parent("[" + c + "]").attr(c) || ""
                                    };
                                    Insider.storage.set({
                                        name: "poll-results-" + this.campID + "-" + e.storyId,
                                        value: n,
                                        expires: 7
                                    })
                                }.bind(this)
                            })
                        }.bind(this),
                        _ = function(e, i) {
                            var n = (Insider.storage.get("sp-camp-" + t, "localStorage", !0) || {}).salesSesId;
                            if (N(e), Insider.getUserSession() === n) return (i || Insider.fns.noop).call(), !1;
                            Insider.request.post({
                                url: "https://hit.api.useinsider.com/hit",
                                data: JSON.stringify(e),
                                success: function() {
                                    (i || Insider.fns.noop).call()
                                },
                                error: function() {
                                    (i || Insider.fns.noop).call()
                                }
                            })
                        },
                        N = function(e) {
                            if ("recommendation_click" === e.event) {
                                var t = Insider.storage.get(i) || [],
                                    n = e.items[0];
                                (t = t.filter((function(e) {
                                    return e.productId !== n
                                }))).push({
                                    productId: n,
                                    campaignId: e.campaign_id,
                                    addedToCart: !1,
                                    productPage: !1
                                }), Insider.storage.set({
                                    name: i,
                                    value: t,
                                    expires: 1
                                })
                            }
                            return !0
                        };
                    return this.initialize(), this
                },
                D = function(t) {
                    this.campID = t, this.mainSelector = e(".ins-preview-wrapper-" + this.campID), this.formData = [], this.resizeEventSetted = !1, this.elementSelectors = {
                        errorClass: "ins-validation-error",
                        closeButtonSelector: ".ins-element-close-button",
                        notificationContentSelector: ".ins-notification-content",
                        initializerSelector: ".ins-slider:not(.ins-slider-initialized)",
                        mainContainerSelector: "[data-main-selector=true]",
                        activeSlideSelector: ".ins-active-slide",
                        pageSelector: ".ins-slider-page",
                        slidePagePrefix: "ins-slide-page",
                        innerContainerSelector: ".ins-slider-container",
                        elementLink: "ins-element-link",
                        dataScrollAttribute: "data-scroll-element",
                        buttonSelector: 'div[id*="button"]',
                        formSelector: "#ins-question-group-form",
                        isDisabledEmailCollectionClass: "ins-disable-collect-email",
                        wheelContainer: "#ins-wheel-of-fortune-adaptive",
                        webWheelContainer: "#ins-web-wheel-of-fortune-adaptive",
                        insSliceContainer: ".ins-slice-container",
                        insSliceCountAttr: "data-wheel-slice",
                        insWinnerSlice: ".ins-wheel-winner-slice",
                        insRelatedSlice: ".ins-wheel-slice",
                        insWheelWrapper: ".insWheelWrapper",
                        emailSelector: 'input[type="email"]',
                        answerContainer: ".ins-survey-holder",
                        questionWrapper: "[id*=ins-wrap-question]",
                        textQuestionWrapper: '[id*="ins-wrap-question"] [data-question-type="text"]',
                        textQuestionAnswers: 'input[type="text"], input[type="email"], input[type="tel"], input[type="phone"], input[type="number"]',
                        checkboxQuestionWrapper: '[id*="ins-wrap-question"] [data-question-type="checkboxes"]',
                        checkboxQuestionAnswers: 'input[type="checkbox"]:not([data-save-exception="true"])',
                        selectedRadio: 'input[type="radio"]:checked',
                        selectedCheckbox: 'input[type="checkbox"]:checked',
                        selectedDropdown: "select option:selected",
                        emailInput: 'input[type="email"]',
                        phoneInput: 'input[type="tel"]',
                        dateInput: 'input[type="date"]',
                        webDateInput: 'input[ins-date="true"]',
                        textInput: 'input[type="text"]',
                        currentQuestion: '.ins-element-question > [id*="ins-question"]',
                        questionTitle: ".ins-question-title",
                        questionOption: 'input[id*="ins-option"]',
                        questionPrefix: "ins-question-",
                        otherText: ".ins-other-text",
                        otherTextPrefix: "ins-other-text-",
                        requiredTextPrefix: "ins-required-text-",
                        optionPrefix: "ins-option-",
                        couponCodeHolder: ".ins-survey-coupon-code",
                        countryPhoneCodeSelector: "ins-phone-country-code",
                        buttonElement: '[id*="link-button"].ins-element-link',
                        thanksButton: '[id*="link-thanks-button"].ins-element-link',
                        dynamicInput: "ins-dynamic-input",
                        inputErrorText: "ins-input-error-text",
                        dynamicCountryCode: "ins-dynamic-country-code",
                        phoneCountryContent: "ins-phone-country-code-content",
                        progressBar: "ins-progress-bar"
                    }, this.initialize = function() {
                        this.setEvents(), Insider.eventManager.on("info:campaign:shown:" + this.campID, function() {
                            this.initSlider(), this.fillCountryCode(), _()
                        }.bind(this))
                    };
                    var i = function(e, t) {
                        var i = "";
                        return "id" === t ? i = "#" : "class" === t && (i = "."), i + this.elementSelectors[e]
                    }.bind(this);
                    this.setEvents = function() {
                        Insider.eventManager.on("submit", ".ins-preview-wrapper-" + this.campID + " form", (function(e) {
                            return e.stopPropagation(), e.preventDefault(), !1
                        })), Insider.eventManager.on("click", ".ins-preview-wrapper-" + this.campID + " " + i("buttonElement"), n((function(e) {
                            S(e)
                        }), 1e3)), Insider.eventManager.on("click", ".ins-preview-wrapper-" + this.campID + " " + i("thanksButton"), n((function(e) {
                            var t = Insider.dom(e.target);
                            L("next", t, "next"), t.closest(g).next().exists() || setTimeout((function() {
                                Insider.dom(v).click()
                            }), 1e3)
                        }), 1e3)), Insider.eventManager.once("goToPage" + this.campID, function(e, t) {
                            this.goToPage(t)
                        }.bind(this)), Insider.eventManager.on("click", ".ins-preview-wrapper-" + this.campID + " " + i("questionOption"), function(t) {
                            var i = f(I(e(t.target)));
                            !0 === i.other && e(t.target).is(":checked") ? this.showOtherTextArea(i) : this.removeOtherTextArea()
                        }.bind(this))
                    }, this.validateHelper = function(e, t, n) {
                        var s = !1,
                            r = n ? t.parent() : t;
                        return e ? (t.removeClass(i("errorClass")), s = !0) : (r.addClass(i("errorClass")), this.addValidationErrorText(t), s = !1), s
                    }, this.addValidationErrorText = function(t) {
                        if (this.isDynamicInput(t)) {
                            var n = e(t).attr("validation-error-color") || "#ff0000",
                                s = e(t).attr("input-error-text") || "";
                            if (e(t).css("border-color", n), !this.isErrorAppended(t)) {
                                var r = e("<div />", {
                                    class: i("inputErrorText"),
                                    css: {
                                        color: n
                                    },
                                    html: s
                                });
                                e(t).after(r)
                            }
                        }
                    }, this.isErrorAppended = function(e) {
                        return e.parent().find(i("inputErrorText", "class")).exists()
                    }, this.validateEmail = function(e, t) {
                        return this.validateHelper(Insider.fns.validateEmail(e.val()), e, t)
                    }, this.validatePhoneNumber = function(e) {
                        return /^[0-9A-Z.]{6,15}$/.test(e)
                    }, this.validatePhone = function(e, t) {
                        return this.validateHelper(this.validatePhoneNumber(e.val()), e, t)
                    }, this.validateInteger = function(t) {
                        var i = Number(e(t).val());
                        return this.validateHelper("" !== e(t).val() && "number" == typeof Number(i), e(t))
                    }, this.initSlider = function() {
                        this.checkInitConditions() && (this.setSliderConfigurations(), this.captureOrientationChanges(), this.setInitializeClass(), this.setProgressBarPosition(0), this.manageAutoCloseOfThePage())
                    }, this.setInitializeClass = function() {
                        this.mainSelector.find(i("initializerSelector")).addClass("ins-slider-initialized")
                    }, this.captureOrientationChanges = function() {
                        this.resizeEventSetted || (this.resizeEventSetted = !0, e(window).on("resize orientationchange", function() {
                            var e = setTimeout(function() {
                                setTimeout(function() {
                                    this.setSliderConfigurations(), this.adjustSliderSizeAccordingToActiveSlide()
                                }.bind(this), 250), clearTimeout(e)
                            }.bind(this), 250)
                        }.bind(this)))
                    }, this.checkInitConditions = function() {
                        var e = !0;
                        return this.mainSelector = Insider.dom(".ins-preview-wrapper-" + this.campID), (this.mainSelector.find(i("pageSelector")).length < 2 || 0 === this.mainSelector.find(i("initializerSelector")).length) && (e = !1), e
                    }, this.setWidthOfElement = function(e, t, i) {
                        this.mainSelector.find(e).css({
                            width: t
                        }), (i || function() {})()
                    }, this.setSliderConfigurations = function() {
                        this.setWidthOfElement(i("innerContainerSelector"), this.mainSelector.find(i("pageSelector")).length * parseInt(this.mainSelector.find(i("mainContainerSelector")).css("width") || 0), function() {
                            this.setWidthOfElement(i("pageSelector"), parseInt(this.mainSelector.find(i("innerContainerSelector")).css("width") || 0) / this.mainSelector.find(i("pageSelector")).length)
                        }.bind(this)), this.setPageIndexes()
                    }, this.getContainerMatrixList = function() {
                        return {
                            x: Number(this.mainSelector.find(i("innerContainerSelector")).css("transform").split(",")[4]),
                            y: null,
                            z: null
                        }
                    }, this.moveSlideToSpecificLocation = function(e) {
                        this.mainSelector.find(i("innerContainerSelector")).css({
                            transform: "translate3d(-" + e + "px, 0, 0)"
                        })
                    }, this.adjustSliderSizeAccordingToActiveSlide = function() {
                        var e = O().index(),
                            t = this.getContainerMatrixList().x,
                            n = this.mainSelector.find(i("pageSelector")).width();
                        0 !== Math.abs(t % n) && this.moveSlideToSpecificLocation(e * n)
                    }, this.setPageIndexes = function() {
                        this.mainSelector.find(i("pageSelector")).accessNodes((function(e, t) {
                            Insider.dom(e).attr({
                                id: i("slidePagePrefix") + "-" + t,
                                "data-insider-slide": t,
                                "data-insider-index": t
                            })
                        }))
                    }, this.createNewQuestion = function() {
                        return {
                            type: null,
                            id: null,
                            text: null,
                            options: []
                        }
                    }, this.checkQuestionIsRequired = function(e) {
                        var t = d();
                        return e && e.closest('[id^="ins-question"]') && (t = e.closest('[id^="ins-question"]')), t.visible().exists() && "true" === t.attr("data-required-question")
                    }, this.showErrorText = function(t) {
                        var n = l()[o()].id,
                            s = p(n),
                            r = e(i("requiredTextPrefix", "id") + n),
                            a = e(i("questionPrefix", "id") + n);
                        r.remove(), s.required && a.find(i("answerContainer")).after(e("<div/>", {
                            id: i("requiredTextPrefix") + n,
                            text: t && s.error_message ? s.error_message_text : s.required_text
                        }))
                    }, this.removeErrorText = function() {
                        e(i("requiredTextPrefix", "id") + l()[o()].id).remove()
                    }, this.showOtherTextArea = function(t) {
                        var n = t.id;
                        e(i("otherTextPrefix", "id") + n).exists() || e(i("optionPrefix", "id") + n).parent().after(e("<input/>", {
                            class: "ins-other-text",
                            id: i("otherTextPrefix") + n,
                            "data-relation": i("optionPrefix") + n,
                            type: "text",
                            placeholder: t.otherText
                        }))
                    }, this.removeOtherTextArea = function() {
                        e(i("otherText"), c()).remove()
                    }, this.setQuestionProperties = function(t, n, s) {
                        var r = w();
                        t.id = t.questionId || I(r), t.type = t.type || r.attr("data-question-type"), t.text = e.trim(r.find('div[id="ins-question-text-' + t.id + '"], ' + i("questionTitle")).text()), t.required_question = r.attr("data-required-question"), e.each(n, (function(i, n) {
                            var r = e(n).attr("id"),
                                a = e("[data-relation=" + r + "]");
                            t.options.push(e.extend({
                                id: I(e(n)),
                                text: a.exists() ? a.val() : e(n).val(),
                                type: e(n).attr("data-answer-type")
                            }, s))
                        }))
                    }, this.saveTextQuestionResult = function() {
                        O().find(i("textQuestionAnswers"), i("textQuestionWrapper")).each(function(t, i) {
                            var n = e(i),
                                s = "true" === n.attr("data-required-question");
                            this.removeValidationError(n), this.validationCheckOnAnswer("" !== n.val().trim() || !s, n) && this.validateFormInput(this.getInputType(n), n.val(), s, n) && this.setAnswerData(n)
                        }.bind(this))
                    }.bind(this), this.validateFormInput = function(e, t, i, n) {
                        var s = !1;
                        if ("" === t && !i) return !0;
                        switch (e) {
                            case "email":
                                s = this.validateEmail(n);
                                break;
                            case "tel":
                                s = this.validatePhone(n);
                                break;
                            case "number":
                                s = this.validateInteger(n);
                                break;
                            case "text":
                                s = !0
                        }
                        return s
                    }, this.saveTextAreaResult = function() {
                        this.setTextAreaData()
                    }.bind(this), this.saveCheckboxResult = function() {
                        O().find(i("checkboxQuestionAnswers"), i("checkboxQuestionWrapper")).each(function(t, i) {
                            var n = e(i);
                            this.validationCheckOnAnswer(n.is(":checked"), n) && (this.setCheckboxData(), this.removeErrorText())
                        }.bind(this))
                    }.bind(this), this.saveSingleChoiceResult = function() {
                        var t = this.assimilateAnswer(e(i("selectedRadio"), c()));
                        this.validationCheckOnAnswer(t.exists() && "" !== t.val()) ? (this.setSingleChoiceData(), this.removeErrorText(), this.removeOtherTextArea()) : this.showErrorText()
                    }, this.assimilateAnswer = function(t) {
                        return "true" === t.attr("data-other-option") && (t = e(i("otherTextPrefix", "id") + I(t))), t
                    }, this.saveMultipleChoiceResult = function() {
                        var t = e(i("selectedCheckbox"), c());
                        this.validationCheckOnAnswer(t.length > 0) ? (this.setMultipleChoiceData(), this.removeErrorText()) : this.showErrorText()
                    }, this.saveDropdownResult = function() {
                        var t = e(i("selectedDropdown"), c());
                        this.validationCheckOnAnswer(t.length > 0) ? (this.setDropdownData(), this.removeErrorText()) : this.showErrorText()
                    }, this.saveLinearResult = function() {
                        var t = e(i("selectedRadio"), c());
                        this.validationCheckOnAnswer(t.length > 0) ? (this.setLinearData(), this.removeErrorText()) : this.showErrorText()
                    }, this.saveEmailResult = function() {
                        var t = e(i("emailInput"), c());
                        this.validationCheckOnAnswer("" !== t.val().trim()) ? !this.validateEmail(t, !0) && this.checkQuestionIsRequired(t) ? this.showErrorText("validation") : (t.parent().removeClass(i("errorClass")), this.setEmailData(), this.removeErrorText()) : this.showErrorText()
                    }, this.saveDateResult = function() {
                        var t = e(i("dateInput"), c());
                        this.validationCheckOnAnswer("" !== t.val()) ? (this.setDateData(), this.removeErrorText()) : this.showErrorText()
                    }, this.saveYesNoResult = function(e) {
                        this.setYesNoData(e)
                    }, this.saveShortAnswerResult = function() {
                        var t = e(i("textInput"), c());
                        this.validationCheckOnAnswer("" !== t.val().trim()) ? (t.parent().removeClass(i("errorClass")), this.setShortAnswerData(), this.removeErrorText()) : this.showErrorText("required")
                    }, this.validationCheckOnAnswer = function(e, t) {
                        t = t || c();
                        var i = this.checkQuestionIsRequired(t);
                        return !i || (i && e ? (this.removeValidationError(t), !0) : (this.addValidationError(t), !1))
                    }, this.addValidationError = function(e) {
                        e.addClass(i("errorClass")), this.addValidationErrorText(e)
                    }, this.getInputType = function(t) {
                        return e(t).attr("type")
                    }, this.setQuestionOptionText = function(e) {
                        var t = e.val();
                        if ("tel" === this.getInputType(e)) {
                            var n = e.siblings(i("countryPhoneCodeSelector", "class"));
                            t = (n.length > 0 ? n : e.parent().siblings(i("countryPhoneCodeSelector", "class"))).find("i").text() + " " + t
                        }
                        return t
                    }, this.removeValidationError = function(t) {
                        e(t).css("border-color", ""), e(t).parent().find(i("inputErrorText", "class")).remove(), t.removeClass(i("errorClass"))
                    }, this.isDynamicInput = function(e) {
                        return e.hasClass(i("dynamicInput"))
                    }, this.setAnswerData = function(e) {
                        var t = e;
                        this.saveAnswerData(this.setQuestionOptions(t, {
                            type: "text",
                            questionId: I(t.closest(i("currentQuestion"))),
                            text: this.setQuestionOptionText(t),
                            id: I(t, 3),
                            inputType: y(t) || y(t.parent())
                        }))
                    }, this.setTextAreaData = function() {
                        var e = O().find("textarea");
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            type: "textarea",
                            questionId: I(e.closest(i("currentQuestion"))),
                            text: this.setQuestionOptionText(e),
                            id: I(e, 3)
                        }))
                    }, this.setCheckboxData = function() {
                        var t = O().find(i("selectedCheckbox"));
                        e.each(t, function(t, n) {
                            var s = e(n);
                            this.saveAnswerData(this.setQuestionOptions(s, {
                                type: "checkbox",
                                inputType: y(s),
                                questionId: I(s.closest(i("currentQuestion"))),
                                text: s.data("option-text"),
                                id: I(s, 3)
                            }))
                        }.bind(this))
                    }, this.setSingleChoiceData = function() {
                        var e = c().find(i("selectedRadio"));
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            type: "radio"
                        }))
                    }, this.setMultipleChoiceData = function() {
                        var e = c().find(i("selectedCheckbox"));
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            questionType: "checkboxes",
                            type: "checkbox"
                        }))
                    }, this.setDropdownData = function() {
                        var e = c().find(i("selectedDropdown"));
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            type: "select"
                        }))
                    }, this.setLinearData = function() {
                        var e = c().find(i("selectedRadio"));
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            type: "radio"
                        }))
                    }, this.setEmailData = function() {
                        var e = c().find(i("emailInput"));
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            questionType: "text",
                            type: "text"
                        }))
                    }, this.setDateData = function() {
                        var t = c().find(i("dateInput")),
                            n = 0 === t.length,
                            s = t.val() || "",
                            r = I(e(i(n ? "webDateInput" : "dateInput")));
                        if (n) {
                            var a = (c().find(i("webDateInput")).val() || "").split("/"),
                                o = {
                                    day: a[0],
                                    month: a[1],
                                    year: a[2]
                                };
                            s = o.year + "-" + o.day + "-" + o.month
                        }
                        this.saveAnswerData(this.setQuestionOptions(s.split("-").map((function(e, t) {
                            var i = "select-year";
                            return 1 === t && (i = "select-month"), 2 === t && (i = "select-day"), Insider.dom().create("input", {
                                id: "ins-date-" + r,
                                value: e
                            }).attr("data-answer-type", i)
                        })), {}))
                    }, this.setYesNoData = function(t) {
                        this.saveAnswerData(this.setQuestionOptions(t, {
                            questionType: "text",
                            type: "text",
                            text: e.trim(t.text())
                        }))
                    }, this.setShortAnswerData = function() {
                        var e = c().find(i("textInput"));
                        this.saveAnswerData(this.setQuestionOptions(e, {
                            questionType: "text",
                            type: "text"
                        }))
                    }, this.setQuestionOptions = function(e, t) {
                        var i = this.createNewQuestion();
                        return (t.questionType || t.questionId) && (i.type = t.questionType, i.questionId = t.questionId, delete t.questionType, delete t.questionId), this.setQuestionProperties(i, e, t), i
                    }, this.saveAnswerData = function(e) {
                        var t = !1;
                        this.formData.length > 0 ? (this.formData.forEach((function(i) {
                            i.id === e.id && (t = !0, i.options = e.options)
                        })), t || this.formData.push(e)) : this.formData.push(e)
                    }, this.isDisabledEmailCollection = function() {
                        return e(i("formSelector")).hasClass(i("isDisabledEmailCollectionClass"))
                    }, this.getCouponType = function() {
                        var t = i("formSelector"),
                            n = "data-coupon",
                            s = "send-mail",
                            r = z(t, n) && e(t).attr(n) === s,
                            a = e(i("emailSelector")).exists();
                        return r && a ? s : "none"
                    }, this.getCurrentCouponCode = function() {
                        return "send-mail" === this.getCouponType() ? window.spApi.storageData("sp-info-c-" + this.campID) : ""
                    }, this.getNextAndPreviousSlideIndex = function() {
                        this.mainSelector = Insider.dom(".ins-preview-wrapper-" + this.campID);
                        var e = Number(O().data("insider-slide")),
                            t = this.mainSelector.find(i("pageSelector")).length;
                        return {
                            next: e + 1 >= t ? e : e + 1,
                            previous: e - 1 <= 0 ? 0 : e - 1,
                            totalSlideCount: t
                        }
                    }, this.goToNextPage = function() {
                        this.goToPage(this.getNextAndPreviousSlideIndex().next), x = Number(this.getNextAndPreviousSlideIndex().next) - 1
                    }, this.goToPreviousPage = function() {
                        this.goToPage(this.getNextAndPreviousSlideIndex().previous)
                    }, this.rightToLeftLanguage = function() {
                        return ["ar_AE", "ar_AR", "ar_EG", "ar_ME", "ar_SA", "fa_FA", "ur_UR"].indexOf(Insider.systemRules.call("getLang")) < 0 ? -1 : 1
                    }, this.goToPage = function(e) {
                        setTimeout(function() {
                            this.mainSelector = Insider.dom(".ins-preview-wrapper-" + this.campID);
                            var t = this.mainSelector.find(i("pageSelector")).width(),
                                n = this.rightToLeftLanguage() * t * e;
                            this.mainSelector.find(i("innerContainerSelector")).css({
                                transform: "translate3d(" + n + "px, 0, 0)",
                                "-webkit-transform": "translate3d(" + n + "px, 0, 0)",
                                "-moz-transform": "translate3d(" + n + "px, 0, 0)",
                                "-ms-transform": "translate3d(" + n + "px, 0, 0)",
                                "-o-transform": "translate3d(" + n + "px, 0, 0)"
                            }), this.setActiveClassTo(e), this.setProgressBarPosition(e), this.manageAutoCloseOfThePage()
                        }.bind(this), 600)
                    }, this.setActiveClassTo = function(e) {
                        this.mainSelector.find(i("pageSelector")).removeClass("ins-active-slide").eq(e).addClass("ins-active-slide")
                    }, this.setProgressBarPosition = function(e) {
                        var t = this.getNextAndPreviousSlideIndex().totalSlideCount,
                            n = ((parseInt(e) + 1) / t * 100).toFixed();
                        this.mainSelector.find(i("progressBar", "class")).css("width", n + "%")
                    }, this.manageAutoCloseOfThePage = function() {
                        if (this.checkAutoCloseStatus()) var e = this.getAutoCloseTimeout(),
                            t = setTimeout(function() {
                                this.mainSelector.find(i("closeButtonSelector")).click(), clearTimeout(t)
                            }.bind(this), 1e3 * e)
                    }, this.checkAutoCloseStatus = function(e) {
                        return void 0 !== e ? e : void 0 !== O().data("auto-close")
                    }, this.getAutoCloseTimeout = function(e) {
                        return void 0 !== e ? Number(e) : O().data("auto-close")
                    }, this.goToDirection = function(e) {
                        var t = e.closest(i("buttonSelector")),
                            n = i("dataScrollAttribute"),
                            s = z(e, "href") && !E(e.attr("href")) && !z(e, "target"),
                            r = z(t, n);
                        s ? window.location.href = e.attr("href") : r && q(t.attr(n))
                    }, this.saveFormData = function(t, n, r) {
                        if (0 === this.formData.length) return !1;
                        var a = (e(i("formSelector")).find(i("emailSelector")).val() || "").toLowerCase(),
                            o = window.location !== window.parent.location ? document.referrer : document.location.href,
                            c = {
                                is_frameless: !0,
                                form_data: this.formData,
                                uid: Insider.getUserId(),
                                campaign_id: this.campID,
                                source: o,
                                coupon_action: {
                                    type: this.getCouponType(),
                                    email: a,
                                    coupon_code: this.getCurrentCouponCode()
                                }
                            };
                        return Insider.request.post({
                            url: "https://carrier.useinsider.com/v2/form/save-questionnaire/" + s,
                            headers: b,
                            parse: !0,
                            data: Insider.fns.stringify(c),
                            success: function() {
                                t && setTimeout(function() {
                                    this.mainSelector.find(i("closeButtonSelector")).click(), setTimeout(function() {
                                        this.goToDirection(r)
                                    }.bind(this), 300)
                                }.bind(this), 1e3 * n), Insider.eventManager.dispatch("leadCollection:userData:sent", {
                                    campaignId: this.campID,
                                    formData: this.formData,
                                    email: a
                                }), this.resetFormData()
                            }.bind(this)
                        }), this
                    }, this.resetFormData = function() {
                        this.formData = []
                    };
                    var n = function(e, t) {
                            var i;
                            return function() {
                                var n = arguments,
                                    s = this;
                                if (!i) return e.apply(s, n), i = !0, setTimeout((function() {
                                    return i = !1
                                }), t)
                            }
                        },
                        o = function() {
                            return O().index()
                        },
                        c = function() {
                            return d().find(i("answerContainer"))
                        },
                        d = function() {
                            return O().find(i("currentQuestion")).eq(0)
                        },
                        l = function() {
                            var e, t = Insider.campaign.get(this.campID);
                            try {
                                e = JSON.parse(t.formConfig)
                            } catch (i) {
                                e = t.formConfig
                            }
                            return e instanceof Array ? e : []
                        }.bind(this),
                        p = function(e) {
                            return l().filter((function(t) {
                                return t.id === e
                            }))[0] || {}
                        },
                        f = function(e) {
                            return l()[o()].options.filter((function(t) {
                                return t.id === e
                            }))[0] || {}
                        },
                        I = function(e, t) {
                            return (e.attr("id") || "").split("-")[t || 2]
                        },
                        y = function(e) {
                            return e.attr("input-type") || e.attr("data-input-type") || e.attr("type") || ""
                        },
                        C = function(t) {
                            var n = void 0 !== window.spApi.wheelOfFortuneConfig.tour ? window.spApi.wheelOfFortuneConfig.tour : 7,
                                s = void 0 !== window.spApi.wheelOfFortuneConfig.speed ? window.spApi.wheelOfFortuneConfig.speed : 3,
                                r = 360 * n + 360 / e(i("insSliceContainer")).attr(i("insSliceCountAttr")) * e(i("insWinnerSlice")).closest(i("insRelatedSlice")).index() * -1;
                            e(i("insWheelWrapper")).css({
                                transform: "rotate(" + r + "deg)",
                                "-webkit-transform": "rotate(" + r + "deg)",
                                "-moz-transform": "rotate(" + r + "deg)",
                                "-ms-transform": "rotate(" + r + "deg)",
                                "-o-transform": "rotate(" + r + "deg)",
                                "-webkit-transition": "all " + s + "s cubic-bezier(0, .99, .44, .99)",
                                "-moz-transition": "all " + s + "s cubic-bezier(0, .99, .44, .99)",
                                "-ms-transition": "all " + s + "s cubic-bezier(0, .99, .44, .99)",
                                "-o-transition": "all " + s + "s cubic-bezier(0, .99, .44, .99)",
                                transition: "all " + s + "s cubic-bezier(0, .99, .44, .99)"
                            }), setTimeout((function() {
                                t()
                            }), 1e3 * (s + 1))
                        },
                        w = function() {
                            return O().find(i("currentQuestion"))
                        },
                        S = function(t) {
                            var n, s = e(t.target || t.currentTarget),
                                c = (l()[o()] || {}).id,
                                d = p(c).type,
                                u = function(t, n) {
                                    var s = e(),
                                        r = !1,
                                        c = {
                                            actionType: "next",
                                            redirectionIndex: "next"
                                        },
                                        d = l()[o()];
                                    if ("single" === t || "linear" === t ? r = (s = w().find(i("selectedRadio"))).length > 0 : "dropdown" === t ? r = (s = w().find(i("selectedDropdown"))).length > 0 : "yes-no" === t && (r = !0), r) {
                                        var u = "next";
                                        if (!d.send_via_answer) return c;
                                        if ("linear" !== t)
                                            if ("yes-no" === t) {
                                                var p = n.attr(a) || n.parents(h).attr(a);
                                                p && (u = "positive" === p ? d.positive_text_page : d.negative_text_page)
                                            } else u = f(I(s)).redirect_page_index;
                                        else {
                                            var m = Number(I(s));
                                            m <= Number(d.rating_less) ? u = d.rating_less_page : m >= d.rating_more && (u = d.rating_more_page)
                                        }
                                        return {
                                            actionType: "next" !== u ? "redirect" : "next",
                                            redirectionIndex: "next" !== u ? u : "next"
                                        }
                                    }
                                    return c
                                }(d, s),
                                g = (n = s).attr(r) || n.parents(h + m).attr(r) || u.actionType;
                            if ("prev" === g) return L(g, s, u.redirectionIndex);
                            switch (d) {
                                case "checkboxes":
                                case "text":
                                    this.saveTextQuestionResult(), this.saveCheckboxResult();
                                    break;
                                case "single":
                                    this.saveSingleChoiceResult();
                                    break;
                                case "multiple":
                                    this.saveMultipleChoiceResult();
                                    break;
                                case "dropdown":
                                    this.saveDropdownResult();
                                    break;
                                case "linear":
                                    this.saveLinearResult();
                                    break;
                                case "date":
                                    this.saveDateResult();
                                    break;
                                case "email":
                                    this.saveEmailResult();
                                    break;
                                case "yes-no":
                                    this.saveYesNoResult(s);
                                    break;
                                case "feedback":
                                    this.saveLinearResult(), this.saveTextAreaResult();
                                    break;
                                case "shortAnswer":
                                    this.saveShortAnswerResult()
                            }
                            this.hasErrors() ? this.isDisabledEmailCollection() && C((function() {
                                L(g, s)
                            })) : (this.isDisabledEmailCollection() || e(i("wheelContainer")).exists() || e(i("webWheelContainer")).exists() ? C((function() {
                                L(g, s)
                            })) : L(g, s, u.redirectionIndex), e(document).trigger("insValidationSuccess" + this.campID))
                        }.bind(this);
                    this.hasErrors = function() {
                        var e = ".ins-preview-wrapper-" + this.campID + " " + i("activeSlideSelector");
                        return Insider.dom(e + " " + i("errorClass", "class") + ", " + e + " " + i("inputErrorText", "class")).exists()
                    }, this.fillCountryCode = function() {
                        e(i("dynamicCountryCode", "class")).length > 0 && Insider.request.get({
                            url: "https://assets.api.useinsider.com/html/country-codes.html",
                            success: function(e) {
                                D(e.body)
                            },
                            parse: !1
                        })
                    };
                    var D = function(e) {
                            var t = A(e);
                            return Insider.dom(i("countryPhoneCodeSelector", "class")).each((function(e, i) {
                                var n = Insider.dom("select", i),
                                    s = Insider.dom(i).siblings("input"),
                                    r = "true" === s.attr("data-default-country"),
                                    a = "";
                                n.nodes[0].innerHTML = t.innerHTML, a = r ? (Insider.storage.get("userLocation", null, !0) || {}).country : s.attr("country-code");
                                var o = Insider.dom('option[data-country-name="' + a.toLowerCase() + '"]:first', n);
                                P(o.val(), o.data("country-name").toUpperCase(), n)
                            })), k(), !0
                        },
                        k = function() {
                            Insider.eventManager.on("change", i("countryPhoneCodeSelector", "class"), (function(e) {
                                var t = Insider.dom("option:selected", e._originalTarget);
                                P(t.attr("value"), t.attr("data-country-name").toUpperCase(), Insider.dom("select", e._originalTarget))
                            }))
                        },
                        A = function(e) {
                            var t = document.createElement("select");
                            return t.innerHTML = e, t
                        },
                        P = function(e, t, n) {
                            var s = Insider.dom(i("phoneCountryContent", "class"));
                            s.find("i").text(e), s.find("span").text(t), n.val(e)
                        },
                        L = function(e, t, n) {
                            var s = t.parent().data("submit-close-timeout") || 0;
                            switch (e) {
                                case "none":
                                    return;
                                case "next":
                                    this.goToNextPage();
                                    break;
                                case "redirect":
                                    x = parseInt(t.closest(".ins-slider-page").attr("data-insider-index") || -1), Insider.dom(i("pageSelector") + ":eq(" + n + ")").attr(u, o()), "next" === n ? this.goToNextPage() : this.goToPage(n);
                                    break;
                                case "prev":
                                    x = Number(O().attr(u)), (x = parseInt(t.closest(".ins-slider-page").attr("data-insider-index")) === x ? -1 : x) > -1 ? this.goToPage(x) : this.goToPreviousPage();
                                    break;
                                case "lead":
                                    if (!t.parents(i("activeSlideSelector")).find('[type="checkbox"]:first').is(":checked")) return;
                                    return void this.saveFormData(this.checkAutoCloseStatus(), this.getAutoCloseTimeout(s), t);
                                case "submit":
                                    return void this.saveFormData(this.checkAutoCloseStatus(!0), this.getAutoCloseTimeout(s), t)
                            }
                            _(), this.isDisabledEmailCollection() || this.saveFormData(this.checkAutoCloseStatus(), this.getAutoCloseTimeout(), t)
                        }.bind(this),
                        O = function() {
                            this.mainSelector = Insider.dom(".ins-preview-wrapper-" + this.campID);
                            var e = this.mainSelector.find(i("activeSlideSelector"));
                            return e.exists() ? e : this.mainSelector.find(i("pageSelector"))
                        }.bind(this),
                        _ = function() {
                            var t = l()[o()],
                                n = l()[o() + 1];
                            (n && n.add_to_coupon || t && t.add_to_coupon) && T({
                                campaignId: this.campID,
                                callback: function(t) {
                                    e(i("couponCodeHolder")).text(t.value)
                                }
                            })
                        }.bind(this);
                    return this.initialize(), this
                },
                T = function(e) {
                    var i = t + e.campaignId,
                        n = Insider.storage.get(i, null, !0);
                    if (n)(e.callback || Insider.fns.noop)({
                        value: n
                    });
                    else {
                        var s = Insider.campaign.get(e.campaignId).ade;
                        k(Insider.fns.assign(e, {
                            expireDate: s
                        }))
                    }
                    return n
                },
                k = function(e) {
                    var t = P(e.campaignId);
                    if (t.key) return A(Insider.fns.assign(e, {
                        authKey: t.key,
                        expireDate: t.expireDate
                    })), !0;
                    var i = {
                        partner: s,
                        user_id: Insider.getUserId(),
                        campaigns: [{
                            id: e.campaignId,
                            et: e.expireDate
                        }]
                    };
                    Insider.request.post({
                        url: "https://carrier.useinsider.com/y/v2/z",
                        headers: b,
                        data: Insider.fns.stringify(i),
                        success: function(t) {
                            var i = (Insider.fns.parse(t.body || "[]")[0] || {}).t;
                            A(Insider.fns.assign(e, {
                                authKey: i
                            }))
                        }
                    })
                },
                A = function(e) {
                    var i = {
                        partner: s,
                        user_id: Insider.getUserId(),
                        campaign_id: e.campaignId,
                        et: e.expireDate,
                        list_id: e.listId
                    };
                    Insider.request.post({
                        url: "https://carrier.useinsider.com/v2/coupon/info",
                        headers: Insider.fns.assign({
                            "x-ins-auth-key": e.authKey
                        }, b),
                        data: Insider.fns.stringify(i),
                        success: function(i) {
                            C = 0;
                            var n = Insider.fns.parse(i.body),
                                s = n ? n.value : "";
                            new Insider.log("c", {
                                type: "notify-coupon",
                                campId: e.campaignId,
                                referer: s
                            }).send(), Insider.storage.set({
                                name: t + e.campaignId,
                                value: s,
                                expires: 7
                            }, null, !0), (e.callback || Insider.fns.noop)({
                                campId: e.campaignId,
                                value: s
                            })
                        },
                        error: function() {
                            C < 3 && setTimeout(A.bind(this, e), 100), C++
                        }
                    })
                },
                P = function(e) {
                    var t = Insider.fns.parse(Insider.fns.decode(Insider.storage.get("ins-z")) || "[]").filter((function(t) {
                        return t.c === e
                    }))[0];
                    return t ? {
                        expireDate: t.et,
                        key: t.t
                    } : {}
                },
                E = function(e) {
                    return "" === e || "#" === e || e.indexOf("javascript:void") > -1
                },
                z = function(t, i) {
                    var n = e(t).attr(i);
                    return void 0 !== n && !1 !== n
                },
                q = function(t) {
                    if (!e(t).exists()) return !1;
                    var i = e(t).offset().top;
                    e("html, body").animate({
                        scrollTop: i
                    }, "slow")
                },
                L = function(e, t) {
                    return e.filter((function(e) {
                        return e.toString() !== t.toString()
                    }))
                };
            Insider.eventManager.on("info:data:ready", (function(e) {
                var t = e.detail.id;
                new S(t), new D(t)
            })), Insider.eventManager.on("info:campaign:loadFacebookSDK", (function(e, t) {
                var i, n, s, r, a, o = Insider.campaign.messagingSuite.settings.facebookMessenger;
                window.fbAsyncInit = function() {
                    FB.init({
                        appId: o.applicationId,
                        xfbml: !0,
                        version: o.apiVersion
                    }), t()
                }, n = "script", s = "facebook-jssdk", a = (i = document).getElementsByTagName(n)[0], i.getElementById(s) || ((r = i.createElement(n)).id = s, r.src = "https://connect.facebook.net/" + Insider.systemRules.call("getLang") + "/sdk.js", a.parentNode.insertBefore(r, a))
            })), Insider.fns.assign(spApi, w)
        }(sQuery)
    } catch (e) {
        Insider.errorBag.add(e)
    }
}();