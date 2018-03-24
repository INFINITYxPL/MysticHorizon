jQuery(document).ready(function() {
    externalHomeNew.init();
});

var externalHomeNew = {
    intervalHandle: null,
    prevFaction:    'vru',
    currentFaction: 'mmo',
    nextFaction:    'eic',
    transitionSpeed: 300,
    transInProgress: false,

    init: function()
    {
        var decider = jQuery('#monitor_company')

        if (decider.hasClass('company_logo_eic')) {
            this.prevFaction    = 'mmo';
            this.currentFaction = 'eic';
            this.nextFaction    = 'vru';
        } else if (decider.hasClass('company_logo_vru')) {
            this.prevFaction    = 'eic';
            this.currentFaction = 'vru';
            this.nextFaction    = 'mmo';
        } else {
            this.prevFaction    = 'vru';
            this.currentFaction = 'mmo';
            this.nextFaction    = 'eic';
        }

        this.shortenRegForm();
        this.showErrorMessage();
        this.makeMonitorClickable();
        this.setFactionSwitching();
        this.enableScreenshots();
        this.setAutoFocus();
    },

    shortenRegForm: function()
    {
        //hide date of birth
        jQuery('div.bgcdw_date.bgcdw_birthdatedate').hide();

        //hide password repeat
        jQuery('div.bgc_signup_form_passwordTwo').hide();

        //handle copy into pwd repeat input field on focus out
        jQuery('input#bgc_signup_form_password').focusout(
            function() {
                jQuery('input#bgc_signup_form_passwordTwo').val(jQuery(this).val());
            }
        );

        // hide newsletter checkbox
        jQuery('.bgc_input_checkbox.bgc_signup_form_newsletter').hide();

        // check and hide terms and conditions checkbox
        jQuery('input#bgc_signup_form_termsAndConditions').attr('checked', 'checked');
        jQuery('input#bgc_signup_form_termsAndConditions').hide();

        // get legal links
        var legalLinks = new Array();
        var legalLinkTxt = new Array();
        jQuery('.bgc_signup_form_termsAndConditions label a').each(function() {
            legalLinks.push(this);
            // needed for stupid IE
            legalLinkTxt.push(jQuery(this).html());
        });

        // replace legal content
        var newText = jQuery('#tucReplacementTxt').val();
        var newLabel = jQuery('.bgc_signup_form_termsAndConditions label');
        jQuery(newLabel).html(newText + '<br />');

        var newLink;
        for (var i in legalLinks) {
            newLink = jQuery(legalLinks[i]).clone();
            jQuery(newLink).html(legalLinkTxt[i]);
            // needed for stupid IE
            jQuery(newLabel).append(newLink);
            jQuery(newLabel).append('<br />');
        }

        jQuery(newLabel).append('<br />');
        jQuery('.bgc_signup_form_termsAndConditions').append(newLabel);
    },

    showErrorMessage: function()
    {
        var errorContent = jQuery('#loginErrorWrapper').html();

        if (!errorContent) {
            return null;
        }

        jQuery.colorbox({
            open: true,
            html: errorContent,
            width: '500px'
        });
    },

    setAutoFocus: function()
    {
        jQuery('#bgcdw_login_form_username').focus();
    },

    setCurrentFaction: function(faction)
    {
        this.currentFaction = faction;
    },

    setFactionSwitching: function()
    {
        this.intervalHandle = window.setInterval(
            function() {
                externalHomeNew.switchFactionTo(externalHomeNew.nextFaction, true)
            },
            12000
        );
    },

    switchFactionTo: function(faction, keepSwitching)
    {
        var switchingDirection = 'forward';

        if (
            this.currentFaction == faction ||
            true == this.transInProgress
        ) {
            return null;
        }

        if (faction == this.prevFaction) {
            switchingDirection = 'backwards';
        }

        this.transInProgress = true;

        switch (faction) {
            case 'mmo':
                this.prevFaction    = 'vru';
                this.nextFaction    = 'eic';
                break;

            case 'eic':
                this.prevFaction    = 'mmo';
                this.nextFaction    = 'vru';
                break;

            case 'vru':
                this.prevFaction    = 'eic';
                this.nextFaction    = 'mmo';
                break;

            default:
                return null;
        }

        this.currentFaction = faction;

        var fadeOutFaction = this.prevFaction;
        if ('backwards' == switchingDirection) {
            fadeOutFaction = this.nextFaction;
        }

        // switch content items and background
        jQuery('.eh_content_' + fadeOutFaction).fadeOut(
            externalHomeNew.transitionSpeed,
            function () {
                jQuery('.eh_content_' + externalHomeNew.currentFaction).fadeIn(
                    externalHomeNew.transitionSpeed,
                    function() {
                        externalHomeNew.transInProgress = false;
                    }
                );
            }
        );

        // switch monitor display
        jQuery('#monitor_company').animate({
                className: 'company_logo_' + externalHomeNew.currentFaction
            }, externalHomeNew.transitionSpeed
        );

        if (true != keepSwitching) {
            window.clearInterval(this.intervalHandle);
        }
    },

    makeMonitorClickable: function()
    {
        jQuery('#monitor_company_left').click(function() {
            externalHomeNew.switchFactionTo(externalHomeNew.prevFaction, false);
        });

        jQuery('#monitor_company_right').click(function() {
            externalHomeNew.switchFactionTo(externalHomeNew.nextFaction, false);
        });
    },

    enableScreenshots: function()
    {
        jQuery('a.eh_screen_trigger').colorbox({
            rel:'screenshots'
        });
    }
}