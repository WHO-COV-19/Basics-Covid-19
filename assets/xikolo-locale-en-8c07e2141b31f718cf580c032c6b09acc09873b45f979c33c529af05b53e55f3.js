I18n.translations || (I18n.translations = {}),
I18n.translations.en = I18n.extend(I18n.translations.en || {}, {
    account: {
        accounts: {
            new: {
                privacy: "<b>Please notice:</b> Your personal data will be processed on %{brand} in accordance with our <a href='%{link}' target='_blank'>privacy policy</a>. By creating a user account on %{brand}, you agree to the terms of our <a href='%{link}' target='_blank'>privacy policy</a>.",
                spam_disclaimer: "You will receive an email to confirm your account. If you haven't received it, please check your spam folder and move the email to your primary mailbox. This is of particular concern to Gmail and Yahoo users.",
                submit: "Register for %{brand}",
                text: "Create a new account on %{brand}. Just fill in your details.<br /><i>Notice:</i> Your name will be shown on your %{brand} Record of Achievement.",
                title: "Welcome to %{brand}"
            },
            verify: {
                confirmation_period: "The verification link will be valid for three days.",
                headline: "Please verify your account",
                message: "You will receive an email for verification in the next few minutes.",
                notice: "Please check your spam folder if you did not receive the confirmation email."
            }
        },
        confirmations: {
            confirmation_failed: {
                button: "Create new account",
                headline: "The confirmation period for your account has already ended.",
                message: "Your account and all related data were automatically deleted because it was not confirmed within three days."
            },
            confirmed_token: {
                headline: "The e-mail has already been confirmed",
                message: "This e-mail address has already been confirmed, so you can log in with your e-mail address and password.\n"
            },
            invalid_signature: {
                headline: "Invalid confirmation link",
                message: "Unfortunately, the confirmation link is invalid or has expired. If you openend\nthe link from an e-mail try again and check if the link looks correct.<br />\nOtherwise, please try to request a new confirmation e-mail by logging in again.<br />\n<br />\nIf you are still experiencing difficulties with logging in, please contact the helpdesk.\n"
            },
            new: {
                headline: "Request new e-mail confirmation",
                message: "Use the button below to request a new confirmation e-mail. We will send you\nan e-mail containing a special link which you can use to confirm that you\nown this e-mail address.\n",
                submit: "Request e-mail confirmation"
            },
            show: {
                headline: "Confirm e-mail address",
                message: "Confirm the e-mail address: %{email}",
                submit: "Confirm %{email}"
            }
        },
        password_resets: {
            flash: {
                email_not_found: "Check if you entered the e-mail you registered with.",
                pw_changed: "Your password has been reset. Please log in again with your new password.",
                reset_send: "We have sent a password reset e-mail to %{email}. Please check your inbox and follow the instructions in the e-mail."
            },
            new: {
                headline: "Reset password",
                instructions: "Please enter your e-mail address and submit the form. You will receive an e-mail with a link that allows you to choose a new password.",
                label: {
                    email: "Your e-mail address",
                    submit: "Request password reset"
                },
                placeholder: {
                    email: "Your e-mail address"
                }
            },
            not_found: {
                headline: "Invalid password reset link",
                message: '<p>\n  Your password reset link does not work. This might be due to several reasons:\n</p> <ul>\n  <li>\n    The link may have expired. Password reset links are <em>only valid for 24 hours</em>.\n  </li>\n  <li>\n    <em>Please note that password reset links can only be used once.</em> You can\n    <a href="%{url}">request a new password reset link</a> or contact the helpdesk\n    if the problem persists or you suspect someone else had access to your\n    account or the reset link.\n  </li>\n  <li>\n    <em>The entered link might be incomplete.</em> Please ensure you have copied the\n    entire URL - your email client may have wrapped it across multiple lines.\n  </li>\n</ul>\n'
            },
            show: {
                headline: "Reset password",
                instructions: "Choose a new password for your account on %{brand}.",
                label: {
                    password: "New password",
                    password_confirmation: "Confirm password",
                    submit: "Set new password"
                },
                placeholder: {
                    password: "New password",
                    password_confirmation: "Confirm password"
                }
            }
        },
        policies: {
            show: {
                accept: "I have read and accept the <a href='%{link}' target='_blank'>terms of use</a>.",
                headline: "Terms of Use",
                instructions: "To proceed with login, please confirm that you have read, understand, and accept the <a href='%{link}' target='_blank'>terms of use</a> in relation to the use of OpenWHO (statement opens in external window).",
                label: {
                    cancel: "Cancel",
                    submit: "Proceed"
                }
            }
        },
        preferences: {
            show: {
                gamification: {
                    headline: "Gamification",
                    show_on_public_profile: "Show badges and user rang on public profile"
                },
                notification: {
                    default_settings: "Reset to default settings",
                    email: {
                        course: {
                            announcement: "Receive announcements for courses you are enrolled to"
                        },
                        global: "%{brand} may send me notifications via e-mail",
                        news: {
                            announcement: "Receive news from %{brand}, e.g. announcements of new courses"
                        },
                        pinboard: {
                            new_answer: "Activity in discussion topics you are following"
                        },
                        stats: "Receive daily statistics for courses you are teaching"
                    },
                    event: "Event",
                    event_notifications: "Event notifications",
                    headline: "Notification settings",
                    headline_email: "global.email",
                    headline_inapp: "In-App",
                    mail_info: "Notifications via e-mail are currently sent to <em>%{email}</em>. You can change this address in your <a href='/dashboard/profile'>profile</a>.",
                    primary_email_suspended: "Your e-mail notifications have been disabled due to problems delivering to your primary e-mail address. Please replace or reactivate your e-mail address in your <a href='/dashboard/profile'>profile</a>.\n"
                },
                privacy: {
                    headline: "Privacy settings",
                    text: "Here you can restrict the information needed for other users to find you."
                },
                records: {
                    headline: "Certificates",
                    info: "You can set preferences for your <a href='%{url}'>records of achievement and confirmations of participation</a>.",
                    show_birthdate: "Show date of birth on my certificates"
                },
                subscription: {
                    action: "Manage subscription",
                    headline: "Followed discussion topics",
                    last_activity: "Last activity",
                    subscribe: "Follow",
                    thread: "Discussion topic",
                    thread_count: {
                        one: "You are following one discussion topic.",
                        other: "You are following %{count} discussion topics.",
                        zero: "You are not following any discussion topics."
                    },
                    unsubscribe: "Unfollow"
                },
                xikolo: {
                    course: {
                        course: {
                            enrollment_create: "New enrollment"
                        }
                    },
                    news: {
                        announcement: {
                            create: "New announcement"
                        }
                    },
                    pinboard: {
                        answer: {
                            create: "New answer in a discussion topic you follow",
                            notify: {
                                create: "New answer in a discussion topic you follow"
                            }
                        }
                    }
                }
            }
        },
        sessions: {
            auth_connect: {
                btn_connect: "Connect an existing account",
                btn_create: "Create a new account",
                headline: "Welcome to %{brand}",
                native_login: {
                    btn_cancel: "Continue with new account",
                    btn_connect: "Login and connect to existing account",
                    text: "<p>You are just about to sign in using %{provider}.</p> <p>Since there is no existing account on %{brand} with your e-mail address, we will create a fresh one for you, <b>unless you already have an account (with a different e-mail address) and want to connect it with your %{provider} login.</b></p>\n"
                },
                provider_label: {
                    saml: "SAML ID",
                    saml_test_id: "SAMLtest ID",
                    who: "WHO Single Sign-On (WIMS)"
                },
                provider_link: {
                    saml_test_id: "https://samltest.id",
                    who: "https://applications.who.int"
                },
                text: "This is the first time you are logging in to %{brand} with this digital identity.",
                text_connect: "Connect your existing account and keep your learning history.",
                text_create: "New to learning on %{brand}?",
                title_connect: "Already an %{brand} learner?"
            },
            connect_account: {
                btn_cancel: "Cancel",
                headline: "Connect an existing %{brand} account",
                hint: "Forgot your password or your password isn\u2019t working? Please contact the <a href='/helpdesk'>helpdesk</a>.",
                text: "Please enter the credentials of your existing %{brand} account. You only have to do this once. In future, you will be able to log in to %{brand} with %{provider} Single Sign-On."
            }
        },
        shared: {
            consent: {
                external_notice: "This consent is managed by a central consent catalog (Consent Manager).",
                profile: {
                    consent_declined_at: "You have declined this consent on %{date}.",
                    consented_at: "You have given this consent on %{date}.",
                    external: "This consent is managed by a central consent catalog (Consent Manager). You can view or change your settings at any time on <a href=%{url} target='_blank' rel='noopener'>this page</a>.",
                    headline: "My consents",
                    notice: "<p>You can give or revoke optional consents at any time.</p><p>Required consents are necessary to provide you with the basic %{brand} services and can only be revoked by deleting your user account, which cannot be reverted.</p>",
                    required: "required"
                },
                required: "You must agree to the required terms in order to continue.",
                user_profile: {
                    label: "User Profile",
                    text: "I allow %{brand} to store the user profile I have created. Some elements of this profile will be visible to other users of the platform in discussion forums or other collaborative tools. These include my <i>real name</i>, if I have not created a dedicated <i>display name</i>, as well as an optional profile photo."
                }
            }
        },
        treatments: {
            consent: {
                flash: {
                    error: "Sorry, an error occurred when updating your consents. Please try again or get in touch with our helpdesk.",
                    success: "Thank you! We have updated your consents."
                }
            },
            index: {
                headline: "We need your consent",
                instructions: "We would like to ask you to give us an additional consent, that we need to provide you with additional service. Please take this opportunity to review the consents you have already given. You can also always review your consents in your user profile.",
                label: {
                    submit: "Proceed"
                }
            }
        }
    },
    activerecord: {
        errors: {
            messages: {
                record_invalid: "Validation failed: %{errors}",
                restrict_dependent_destroy: {
                    has_many: "Cannot delete record because dependent %{record} exist",
                    has_one: "Cannot delete record because a dependent %{record} exists"
                }
            }
        },
        models: {
            attributes: {
                create: "Erzeuhe",
                new: "nono",
                update: "Updatier"
            },
            item: {
                create: "Erzeuhe",
                new: "jaja",
                update: "Updatier"
            }
        }
    },
    admin: {
        announcement_email: {
            recipients_course_students: "Students of course %{course}",
            recipients_selector_content_tests: "Content Tests",
            recipients_selector_courses: "Course Students",
            recipients_selector_custom_recipients: "Custom Recipients Groups",
            recipients_selector_special_group: "Special Groups",
            recipients_selector_students: "Users"
        },
        announcements: {
            edit: {
                headline: "Edit announcement"
            },
            form: {
                translation_hint: "If available, you can provide translations for users speaking other languages here. For languages you omit, the system will automatically fall back to the default language above.",
                translations: "Translations"
            },
            index: {
                created_on: "created on %{date}",
                drafts: "Drafts",
                drafts_empty: "There are currently no announcement drafts.",
                headline: "Announcements",
                new_announcement: "Draft new announcement",
                publish_email: "Publish via email",
                publish_site: "Publish on site",
                published: "Published",
                published_empty: "No announcement has been published so far.",
                published_site: "Published on site.",
                view_post: "View post",
                view_statistics: "View statistics"
            },
            new: {
                new_announcement: "Draft new announcement",
                new_email: "Publish announcement via email"
            },
            show: {
                authored_at: "on %{date}",
                authored_by: "authored by",
                headline: "Announcements",
                note_estimation: "Note: This is a rough estimate. The numbers might be skewed by email clients not embedding images.",
                num_deliveries: "to %{num} recipients",
                num_opened: "%{num_opens} out of %{num_total} users have opened this email",
                open_rate: "Open Rate",
                recipients: "Recipients",
                sending_status: "Success: %{success} | Error: %{error} | Disabled: %{disabled}",
                sent_at: "on %{date}",
                sent_by: "sent by",
                status: "Status"
            }
        },
        channels: {
            actions: {
                edit: "Edit",
                remove: "Remove",
                show: "View"
            },
            add: "Add new channel",
            channel: "Channel",
            code: "Code",
            description: "Description",
            edit: {
                title: "Edit channel"
            },
            empty_msg: "There are currently no channels.",
            form: {
                label: {
                    submit: "Save channel order"
                }
            },
            headline: "Channels",
            logo: "Logo",
            name: "Name",
            new: {
                title: "Add channel"
            },
            public: "Public?",
            public_false: !1,
            public_true: !0,
            reorder: "Change channel order",
            show_on_stage: "Show on stage",
            sort: {
                back_to_list: "Back to channels list",
                empty_msg: "There are currently no channels.",
                info: "You can sort the channels by drag and drop. The order is used everywhere channels are listed, e.g., the channels dropdown in the main navigation (if the channels dropdown is enabled).",
                title: "Change channel order"
            },
            video: "Video"
        },
        classifiers: {
            actions: {
                create: "Add new tag",
                destroy: "Remove",
                edit: "Edit",
                manage_courses: "Manage courses",
                reorder: "Change order"
            },
            courses: {
                sort: {
                    empty_msg: "There are currently no courses for this classifier. Add a course.",
                    info: "You can sort the courses by drag and drop. The order is used everywhere courses are listed by tag.",
                    title: "%{classifier}: Change course order"
                }
            },
            current_order: "Current order: %{sort_mode}",
            edit_headline: "Tag: %{classifier}",
            empty_msg: "There are currently no tags.",
            headline: "Tags",
            order: "Order: %{sort_mode}",
            sort: {
                back_to_list: "Back to category",
                empty_msg: "There are currently no tags for this category.",
                info: "You can sort the tags by drag and drop. The order is used everywhere tags are listed, e.g., in the category filters on the course list.",
                title: "%{cluster}: Change tag order"
            },
            sort_mode: {
                automatic: "alphabetical (by title)",
                manual: "manual"
            },
            title: "ID"
        },
        clusters: {
            actions: {
                edit: "Edit",
                remove: "Remove",
                show: "Manage tags"
            },
            add: "Add new category",
            classifiers: "Tags (IDs)",
            classifiers_preview: {
                one: "%{classifiers} + 1 other",
                other: "%{classifiers} + %{count} others",
                zero: "%{classifiers}"
            },
            edit: "Edit category",
            edit_headline: "Edit category: %{cluster}",
            empty_msg: "There are currently no categories.",
            headline: "Categories",
            id: "Code",
            name: "Title",
            show_headline: "Category: %{cluster}",
            visible: "Public",
            visible_false: "false",
            visible_true: "true"
        },
        course_management: {
            dashboard: {
                age: {
                    course: "Course",
                    platform: "Platform",
                    title: "Age Distribution"
                },
                client_usage: {
                    label_desktop_web: "Desktop Web",
                    label_mobile_app: "App",
                    label_mobile_web: "Mobile Web",
                    learners_tooltip: "Users",
                    title: "Client Usage"
                },
                geo: {
                    title: "User Locations"
                },
                kpis: {
                    activity: {
                        show_rate_explanation: "ratio based on total enrollments",
                        shows: "Current Shows",
                        shows_at_end: "Shows at end",
                        shows_at_end_rate_explanation: "ratio based on enrollments at end",
                        shows_at_middle: "Shows at middle",
                        shows_at_middle_rate_explanation: "ratio based on enrollments at middle",
                        title: "Activity"
                    },
                    bookings: {
                        proctorings: "Proctorings",
                        reactivations: "Reactivations",
                        title: "Bookings"
                    },
                    certificates: {
                        completion_rate_explanation: "ratio based on shows at middle",
                        consumption_rate_explanation: "ratio based on shows at end",
                        cop: "Confirmations of Participation",
                        not_available: "No certificates are enabled for this course.",
                        not_released: "Certificates not released yet.",
                        qc: "Certificates",
                        roa: "Records of Achievement",
                        title: "Certificates"
                    },
                    enrollments: {
                        at_end: "At end",
                        at_middle: "At middle",
                        at_start: "At start",
                        last_day: "Last 24 hours",
                        non_deleted: "non-deleted",
                        title: "Enrollments",
                        total: "Total"
                    },
                    forum: {
                        forum_activity: "Learners used the Forum",
                        forum_write_activity: "Learners posted in Forum",
                        posts: "Posts",
                        posts_in_collab_spaces: "Posts in Collab Spaces",
                        posts_last_day: "Posts (last 24 hours)",
                        posts_last_day_in_collab_spaces: "Posts in Collab Spaces (last 24 hours)",
                        threads: "Topics",
                        threads_in_collab_spaces: "Topics in Collab Spaces",
                        threads_last_day: "Topics (last 24 hours)",
                        threads_last_day_in_collab_spaces: "Topics in Collab Spaces (last 24 hours)",
                        title: "Forum"
                    },
                    helpdesk: {
                        avg_tickets_per_day_last_year: "Average Tickets per Day (last 365 days)",
                        ticket_count: "Total Tickets",
                        ticket_count_last_day: "Total Tickets (last 24 hours)",
                        title: "Helpdesk"
                    },
                    items: {
                        graded_quiz: "Graded Quiz Performance",
                        title: "Learning Items",
                        ungraded_quiz: "Selftest Performance"
                    },
                    misc: {
                        course_social_shares: "Course Social Shares",
                        downloads: "Video Asset Downloads",
                        item_visits: "Item Visits",
                        qc_alerts: "Alerts",
                        recent_news_progress: {
                            name: "Recent News Progress",
                            state_text: {
                                text_disabled: "disabled",
                                text_error: "error",
                                text_failed: "failed",
                                text_preparing: "preparing",
                                text_sending: "sending",
                                text_sent: "sent",
                                text_success: "success"
                            }
                        },
                        rich_text_link_clicks: "Link Clicks in Text Items",
                        title: "Miscellaneous",
                        video_plays: "Videos Played by Users"
                    },
                    open_badges: {
                        badge_downloads: "Downloaded Badges",
                        badge_issues: "Issued Badges",
                        badge_shares: "Shared Badges",
                        title: "Open Badges"
                    },
                    title: "KPIs"
                },
                more_details: "More details",
                no_data_message: "No data available",
                referrers: {
                    title: "Top Traffic Sources"
                },
                request_error_message: "Could not load data!",
                stats_over_time: {
                    enrollments: {
                        active_users_last_7days: "Active users (last 7 days)",
                        active_users_last_day: "Active users (last day)",
                        current_enrollments: "Enrollments (non-deleted)",
                        enrollments_last_day: "Enrollments (last day)",
                        new_users: "New learners",
                        no_shows: "No-shows",
                        title: "Enrollments and Learners",
                        total_enrollments: "Enrollments (total)"
                    },
                    forum: {
                        helpdesk_tickets: "Helpdesk tickets",
                        posts: "Posts",
                        posts_in_collab_spaces: "Posts in collab spaces",
                        title: "Forum and Helpdesk",
                        topics: "Topics",
                        topics_in_collab_spaces: "Topics in collab spaces"
                    },
                    start_and_end_date: "Course started at %{start_date}, and ended at %{end_date}, which are marked as dashed vertical lines in the following charts.",
                    start_date: "Course started at %{start_date}, which is marked as a dashed vertical line in the following charts.",
                    title: "Historic Data"
                },
                title: "Course Dashboard",
                weekday_activity: {
                    active_users_tooltip: "active users on average",
                    axis_title_day: "Weekday",
                    axis_title_hour: "Hour",
                    title: "Users by Hour of Weekday"
                }
            },
            enrollments: {
                copy_id: "Copy ID",
                details: "Details",
                email: "Email",
                enroll_user: "Enroll user",
                enrolled: "Enrolled",
                enrollment_id: "Enrollment ID",
                features: "Booked features",
                proctoring: "Certificate",
                progress: "Progress",
                reactivation_html: '<span title="Until %{date}">Reactivation</span>',
                reset_filter: "Reset filter",
                search_for_user: "Search for user",
                student: "Student",
                submissions: "Submissions",
                unenroll_confirm: "Do you really want to unenroll this user?",
                unenroll_user: "Unenroll",
                user_name: "Name",
                user_not_confirmed: "The user cannot be enrolled in this course because the account has not yet been confirmed.",
                user_not_enrolled: "The user <strong> %{user_name} (%{user_email}) </strong> is not enrolled for this course!"
            },
            policy_url: "Policy URL",
            submission_statistics: {
                average_points: "Average points: ",
                average_time: "Average time: ",
                correct: "Correct",
                distinct: "Submitting users: ",
                limit: " limit",
                percent_of: "% of ",
                please_select: "Please select...",
                seconds: " seconds",
                student_performance: "Student performance",
                submissions: "Submission",
                title: "Quiz Details (Deprecated)",
                total: "total",
                total_points: "Total points: ",
                total_submissions: "Total Submissions: ",
                wrong: "Wrong"
            },
            submissions: {
                access_time: "Access time",
                actions: "Actions",
                add_attempt: "+1",
                attempts: {
                    additional: "Additional attempts",
                    allowed: "Allowed attempts",
                    remaining: "Remaining attempts",
                    unlimited: "Unlimited"
                },
                convert_manually: "Convert manually",
                copy_id: "Copy ID",
                count: "Count",
                empty: {
                    course: "It looks like there are no quiz submissions in this course so far.",
                    filtered: "This learner has not submitted any quizzes in this course yet."
                },
                false_text: !1,
                grading: "Grading",
                proctoring: {
                    exclude: "Exclude from proctoring",
                    exclude_confirm: "Are you sure you want to exclude the submission from proctoring?",
                    failed: "Proctoring failed",
                    passed: "Proctoring passed",
                    passed_with_issues: "Proctoring passed with some issues",
                    processing: "Proctoring: Still processing..."
                },
                profile: "Profile",
                quiz: "Quiz",
                search_reset: "Reset filter",
                search_user: "Search for user: ",
                snapshot: "Snapshot?",
                submission: "Submission",
                submission_time: "Submission time",
                submissions: "Submissions",
                submitted: "Submitted?",
                timestamps: {
                    access: "Accessed: %{time}",
                    label: "Time",
                    not_submitted: "Not submitted",
                    submit: "Submitted: %{time}"
                },
                title: "Title",
                true_text: !0,
                user: "User",
                user_submissions: "All submissions in graded and bonus quizzes for "
            }
        },
        courses: {
            classifiers: {
                course_status: {
                    active: "Active",
                    archive: "Archive",
                    preparation: "Preparation"
                },
                status: "Status"
            },
            delete: "Delete course",
            form: {
                edit_visuals: "Edit visuals",
                file: "File name:"
            },
            formgroups: {
                certificate: "Certificates",
                classifiers: "Categorization",
                dates: "Runtime and visibility",
                end: "End of course",
                enrollment: "Enrollment",
                features: "Features",
                meta: "Metadata",
                statistics: "Statistics",
                teaching_team: "Teachers",
                visuals: "Visuals"
            },
            generate_ranking: {
                created_at: "Created at: %{date}",
                error: {
                    msg: "Please try again or contact the administration team",
                    title: "An error occurred"
                },
                label: "Generate Ranking",
                quantile_count: "Quantile count: %{count}",
                success: {
                    title: "The generate ranking request has been sent"
                }
            },
            help: "Help",
            index: {
                actions: "Actions",
                code: "Code",
                copy_id: "Copy ID",
                create: "Create new course",
                edit: "Edit",
                filter: {
                    active: "Active",
                    archive: "Archive",
                    preparation: "Preparation",
                    status: "Status"
                },
                headline: "All Courses",
                preparation: "In preparation",
                published: "Published",
                search: {
                    label: "Filter by:",
                    submit: "Search"
                },
                status: "Status",
                title: "Title"
            },
            info: {
                invite_only: "If you configure an external registration URL in any language, learners will no longer be able to un-enroll themselves from the course. Learners must also go to the external registration to cancel their booking properly."
            },
            items: {
                form: {
                    additional_files: {
                        audio: "Audio",
                        reading_material: "Reading material",
                        remove: "Remove file",
                        slides: "Slides",
                        transcript: "Transcript"
                    },
                    description: "Description",
                    exercise_type_selector: {
                        bonus: "Bonus",
                        main: "Main",
                        none: "None",
                        selftest: "Self test",
                        survey: "Survey"
                    },
                    label: {
                        content_type: "Type",
                        end_date: "End date",
                        exercise_type: "Exercise type",
                        featured: "Featured",
                        icon_type: "Icon type",
                        max_points: "Maximal points",
                        open_mode: "Open Mode allowed",
                        optional: "Optional",
                        proctored: "Enable proctoring?",
                        public_description: "Public description",
                        public_description_hint: "A public description should contain a textual summary of the video content (useful for search engines in Open Mode).",
                        published: "Published",
                        required_items: "Required items",
                        show_in_nav: "Show in course navigation",
                        start_date: "Start date",
                        submission_deadline: "Submission deadline",
                        submission_publishing_date: "Submission publishing date",
                        time_effort: "Time effort",
                        title: "Title"
                    },
                    placeholder: {
                        title: "Enter a title"
                    },
                    rebuild_thumbnails_for_video: "(Re-)generate thumbnails for this video",
                    synchronize_video_stream: "Synchronize this video with all providers",
                    time_effort: {
                        calculated_time_effort: "Calculated time effort",
                        calculated_time_effort_hint: "Please note that the value given for the automatic calculation may have changed in the meantime due to ongoing calculations.",
                        must_be_number: "The time effort must be given in seconds.",
                        not_available: "Not available",
                        not_overwritten: "Not overwritten",
                        overwrite_error: "The time effort could not be overwritten.",
                        reset_error: "The time effort could not be reset to the automatically calculated value."
                    },
                    type_selector: {
                        lti_exercise: "External exercise tool",
                        peer_assessment: "Peer Assessment",
                        quiz: "Quiz",
                        text: "Text",
                        video: "Video"
                    },
                    video_data: {
                        lecturer_stream: "Lecturer stream",
                        pip_stream: "Pip stream",
                        slides_stream: "Slides stream",
                        stream_placeholder: "Choose a stream",
                        subtitled_stream: "Subtitled stream",
                        subtitles: "Subtitles",
                        thumbnail_archive: "Metadata archive",
                        transpipe_link: "Manage subtitles in TransPipe"
                    },
                    video_groupings: {
                        additional_files: "Additional Files",
                        video_data: "Video Data"
                    }
                }
            },
            new: "Create course",
            sections: {
                form: {
                    label: {
                        description: "Description",
                        end_date: "End date",
                        optional: "Section is optional",
                        pinboard_closed: "Close discussions?",
                        published: "Published",
                        start_date: "Start date",
                        title: "Title"
                    },
                    placeholder: {
                        description: "Enter a description of the section. This will also be shown on the course details page",
                        title: "Enter a section title"
                    }
                }
            },
            update: "Update course"
        },
        dashboard: {
            courses_overview: {
                empty_state: 'An overview of courses with the "dashboard" tag in the "reporting" category will appear here.',
                headline: "Course Dashboard",
                table: {
                    course_code: "Course Code",
                    course_title: "Course Title",
                    enrollments: "Enrollments",
                    start_date: "Start Date"
                }
            },
            nav: {
                activity: "Activity",
                dashboard: "Dashboard",
                geo: "Geographic",
                news: "News",
                qc_alerts: "QC Alerts",
                referrer: "Referrer",
                social: "Social Shares",
                title: "Statistics"
            },
            show: {
                age: {
                    title: "Age Distribution"
                },
                client_usage: {
                    label_desktop_web: "Desktop Web",
                    label_mobile_app: "App",
                    label_mobile_web: "Mobile Web",
                    learners_tooltip: "Users",
                    title: "Client Usage (Last Month)"
                },
                geo: {
                    title: "User Locations (Last Month)"
                },
                kpis: {
                    activity: {
                        active_learners_last_24h: "Active Learners (last 24 hours)",
                        active_learners_last_7days: "Active Learners (last 7 days)",
                        active_learners_last_hour: "Active Learners (last hour)",
                        learner_activity_last_hour: "Learner Activity (last hour)",
                        title: "Activity"
                    },
                    enrollments: {
                        courses_per_learner: "Course Enrollments per Learner",
                        title: "Enrollments",
                        total_course_custom_completions: "Total Course Custom Completions",
                        total_course_enrollments: "Total Course Enrollments",
                        total_course_enrollments_last_24h: "Total Course Enrollments (last 24 hours)",
                        total_course_enrollments_last_7days: "Total Course Enrollments (last 7 days)",
                        total_course_enrollments_unique_learners: "Total Course Enrollments from Unique Learners (last 24 hours)",
                        total_course_unenrollments: "Total Course Unenrollments"
                    },
                    learners: {
                        incomplete_registrations: "Incomplete Registrations",
                        incomplete_registrations_last_24h: "Incomplete Registrations (last 24 hours)",
                        title: "Learners",
                        total_deleted_learners: "Total Deleted Learners",
                        total_unique_learner_registration: "Total Unique Learner Registration",
                        total_unique_learner_registration_last_24h: "Total Unique Learner Registration (last 24 hours)",
                        total_unique_learner_registration_last_7days: "Total Unique Learner Registration (last 7 days)",
                        users_with_suspended_email: "Learners with Suspended Email Address"
                    },
                    misc: {
                        course_social_shares: "Course Social Shares",
                        qc_alerts: "Alerts",
                        recent_news_progress: {
                            course_news_name: "Recent Course News Progress",
                            global_news_name: "Recent Global News Progress",
                            state_text: {
                                text_disabled: "disabled",
                                text_error: "error",
                                text_failed: "failed",
                                text_preparing: "preparing",
                                text_sending: "sending",
                                text_sent: "sent",
                                text_success: "success"
                            }
                        },
                        title: "Miscellaneous"
                    },
                    title: "KPIs"
                },
                more_details: "More details",
                no_data_message: "No data available",
                referrers: {
                    title: "Top Traffic Sources"
                },
                request_error_message: "Could not load data!",
                title: "Platform Dashboard",
                weekday_activity: {
                    active_users_tooltip: "active users on average",
                    axis_title_day: "Weekday",
                    axis_title_hour: "Hour",
                    title: "Users by Hour of Weekday (Last Month)"
                }
            }
        },
        live_events: {
            edit: {
                channel_started: "Servers are ready and you can start transmitting a stream now.",
                confirm_start_channel: "Starting the servers. This can take a few minutes.",
                confirm_start_event: "Make sure the streaming device is already running and transmitting to the streaming server.",
                confirm_stop_event: "Remember to turn of your streaming device after stopping the stream!",
                guide_1: 'Before starting a live briefing the status should be "stopped".',
                guide_2: 'Click the "Start servers" button. This will start the underlying streaming servers.',
                guide_3: "Once the servers are running, start streaming a video stream from the Tele-TASK system. The briefing has NOT gone live yet! Only you can see the stream-preview in this state (you might have to reload the page for the player to load properly).",
                guide_4: 'When you are satisfied with the visuals in the preview, press "Start live briefing". Other users can now watch the stream and it is recorded for future use. Once again, you might have to reload the page manually.',
                guide_5: 'Upon completion of the live briefing, click "Stop live briefing + server". Instead of the live stream, users will from now on see the recorded stream.',
                guide_6: "Turn off the Tele-TASK stream.",
                help: "The buttons and associated actions need to be executed from left to right. See the live briefing guide for further information.",
                live_streaming_guide: "Live Streaming Guide",
                manage: "Manage Live Briefing",
                program_started: "The briefing has started and should be visible to others.",
                start_channel: "1. Start servers",
                start_live_event: "2. Start live briefing",
                stop_live_event: "3. Stop live briefing + server"
            },
            form: {
                description: "Description",
                further_info: "Further information",
                live_chat_id: "Live Chat ID",
                live_video_id: "Live Video ID",
                new_live_event: "Create new event",
                speaker: "Speaker",
                start: "Start",
                title: "Title",
                update_live_event: "Save changes"
            },
            index: {
                confirm_delete: "This will delete the live briefing.",
                delete: "Delete",
                edit: "Edit",
                manage: "Manage"
            },
            live_events: "Live Briefings (Beta)"
        },
        lti_providers: {
            edit: {
                headline: "Edit LTI Provider"
            },
            index: {
                confirm_delete: "Deleting will break all course items still referencing this provider. Do you really want to delete it?",
                create: "Create new LTI Provider",
                domain: "Launch URL",
                empty_state: "There are no LTI providers. You can create one via the button 'Create new LTI Provider'.",
                title: "LTI Providers"
            },
            new: {
                headline: "Add LTI Provider"
            }
        },
        polls: {
            actions: "Actions",
            add: "Create poll",
            confirm_delete: "Are you sure you want to delete this poll?",
            delete: "Delete",
            edit: "Edit",
            edit_poll: "Edit poll",
            empty_msg: "There are currently no polls.",
            end_at: "End at",
            headline: "Polls",
            options: "Options",
            question: "Question",
            show: "Details",
            start_at: "Start at"
        },
        statistics: {
            activity: {
                daily_activity: {
                    active_users_tooltip: "active users",
                    axis_title_day: "Day",
                    axis_title_hour: "Hour",
                    title: "Users by Hour of Day"
                },
                title: "Activity Statistics"
            },
            announcements: {
                title: "Announcement Statistics"
            },
            downloads: {
                actions_header: "Actions",
                audio_downloads_header: "Audio Downloads (by Unique Users)",
                copy_id: "Copy ID",
                hd_video_downloads_header: "HD Video Downloads (by Unique Users)",
                hls_video_downloads_header: "HLS Video Downloads (by Unique Users)",
                item_title_header: "Item",
                position_header: "Position",
                sd_video_downloads_header: "SD Video Downloads (by Unique Users)",
                slides_downloads_header: "Slides Downloads (by Unique Users)",
                title: "Downloads",
                total_downloads_header: "Total Downloads (by Unique Users)",
                transcript_downloads_header: "Transcript Downloads (by Unique Users)",
                video_assets: "Video Assets"
            },
            geo: {
                city_header: "City",
                countries: {
                    a1: "Anonymous Proxy",
                    a2: "Satellite Provider",
                    ac: "Ascension Island",
                    ad: "Andorra",
                    ae: "United Arab Emirates",
                    af: "Afghanistan",
                    ag: "Antigua and Barbuda",
                    ai: "Anguilla",
                    al: "Albania",
                    am: "Armenia",
                    an: "Netherlands Antilles",
                    ao: "Angola",
                    ap: "Asia/Pacific",
                    aq: "Antarctica",
                    ar: "Argentina",
                    as: "American Samoa",
                    at: "Austria",
                    au: "Australia",
                    aw: "Aruba",
                    ax: "\xc5land Islands",
                    az: "Azerbaijan",
                    ba: "Bosnia and Herzegovina",
                    bb: "Barbados",
                    bd: "Bangladesh",
                    be: "Belgium",
                    bf: "Burkina Faso",
                    bg: "Bulgaria",
                    bh: "Bahrain",
                    bi: "Burundi",
                    bj: "Benin",
                    bl: "Saint Barth\xe9lemy",
                    bm: "Bermuda",
                    bn: "Brunei",
                    bo: "Bolivia",
                    br: "Brazil",
                    bs: "Bahamas",
                    bt: "Bhutan",
                    bv: "Bouvet Island",
                    bw: "Botswana",
                    by: "Belarus",
                    bz: "Belize",
                    ca: "Canada",
                    cc: "Cocos [Keeling] Islands",
                    cd: "Congo - Kinshasa",
                    cf: "Central African Republic",
                    cg: "Congo - Brazzaville",
                    ch: "Switzerland",
                    ci: "C\xf4te d\u2019Ivoire",
                    ck: "Cook Islands",
                    cl: "Chile",
                    cm: "Cameroon",
                    cn: "China",
                    co: "Colombia",
                    cr: "Costa Rica",
                    cs: "Serbia and Montenegro",
                    cu: "Cuba",
                    cv: "Cape Verde",
                    cw: "Cura\xe7ao",
                    cx: "Christmas Island",
                    cy: "Cyprus",
                    cz: "Czech Republic",
                    de: "Germany",
                    dj: "Djibouti",
                    dk: "Denmark",
                    dm: "Dominica",
                    do: "Dominican Republic",
                    dz: "Algeria",
                    ec: "Ecuador",
                    ee: "Estonia",
                    eg: "Egypt",
                    eh: "Western Sahara",
                    er: "Eritrea",
                    es: "Spain",
                    et: "Ethiopia",
                    eu: "Europe",
                    fi: "Finland",
                    fj: "Fiji",
                    fk: "Falkland Islands",
                    fm: "Micronesia",
                    fo: "Faroe Islands",
                    fr: "France",
                    ga: "Gabon",
                    gb: "United Kingdom",
                    gd: "Grenada",
                    ge: "Georgia",
                    gf: "French Guiana",
                    gg: "Guernsey",
                    gh: "Ghana",
                    gi: "Gibraltar",
                    gl: "Greenland",
                    gm: "Gambia",
                    gn: "Guinea",
                    gp: "Guadeloupe",
                    gq: "Equatorial Guinea",
                    gr: "Greece",
                    gs: "South Georgia and the South Sandwich Islands",
                    gt: "Guatemala",
                    gu: "Guam",
                    gw: "Guinea-Bissau",
                    gy: "Guyana",
                    hk: "Hong Kong SAR China",
                    hm: "Heard Island and McDonald Islands",
                    hn: "Honduras",
                    hr: "Croatia",
                    ht: "Haiti",
                    hu: "Hungary",
                    id: "Indonesia",
                    ie: "Ireland",
                    il: "Israel",
                    im: "Isle of Man",
                    in: "India",
                    io: "British Indian Ocean Territory",
                    iq: "Iraq",
                    ir: "Iran",
                    is: "Iceland",
                    it: "Italy",
                    je: "Jersey",
                    jm: "Jamaica",
                    jo: "Jordan",
                    jp: "Japan",
                    ke: "Kenya",
                    kg: "Kyrgyzstan",
                    kh: "Cambodia",
                    ki: "Kiribati",
                    km: "Comoros",
                    kn: "Saint Kitts and Nevis",
                    kp: "North Korea",
                    kr: "South Korea",
                    kw: "Kuwait",
                    ky: "Cayman Islands",
                    kz: "Kazakhstan",
                    la: "Laos",
                    lb: "Lebanon",
                    lc: "Saint Lucia",
                    li: "Liechtenstein",
                    lk: "Sri Lanka",
                    lr: "Liberia",
                    ls: "Lesotho",
                    lt: "Lithuania",
                    lu: "Luxembourg",
                    lv: "Latvia",
                    ly: "Libya",
                    ma: "Morocco",
                    mc: "Monaco",
                    md: "Moldova",
                    me: "Montenegro",
                    mf: "Saint Martin",
                    mg: "Madagascar",
                    mh: "Marshall Islands",
                    mk: "Macedonia",
                    ml: "Mali",
                    mm: "Myanmar [Burma]",
                    mn: "Mongolia",
                    mo: "Macau SAR China",
                    mp: "Northern Mariana Islands",
                    mq: "Martinique",
                    mr: "Mauritania",
                    ms: "Montserrat",
                    mt: "Malta",
                    mu: "Mauritius",
                    mv: "Maldives",
                    mw: "Malawi",
                    mx: "Mexico",
                    my: "Malaysia",
                    mz: "Mozambique",
                    na: "Namibia",
                    nc: "New Caledonia",
                    ne: "Niger",
                    nf: "Norfolk Island",
                    ng: "Nigeria",
                    ni: "Nicaragua",
                    nl: "Netherlands",
                    no: "Norway",
                    not_set: "Not Set",
                    np: "Nepal",
                    nr: "Nauru",
                    nu: "Niue",
                    nz: "New Zealand",
                    om: "Oman",
                    pa: "Panama",
                    pe: "Peru",
                    pf: "French Polynesia",
                    pg: "Papua New Guinea",
                    ph: "Philippines",
                    pk: "Pakistan",
                    pl: "Poland",
                    pm: "Saint Pierre and Miquelon",
                    pn: "Pitcairn Islands",
                    pr: "Puerto Rico",
                    ps: "Palestinian Territories",
                    pt: "Portugal",
                    pw: "Palau",
                    py: "Paraguay",
                    qa: "Qatar",
                    re: "R\xe9union",
                    ro: "Romania",
                    rs: "Serbia",
                    ru: "Russia",
                    rw: "Rwanda",
                    sa: "Saudi Arabia",
                    sb: "Solomon Islands",
                    sc: "Seychelles",
                    sd: "Sudan",
                    se: "Sweden",
                    sg: "Singapore",
                    sh: "Saint Helena",
                    si: "Slovenia",
                    sj: "Svalbard and Jan Mayen",
                    sk: "Slovakia",
                    sl: "Sierra Leone",
                    sm: "San Marino",
                    sn: "Senegal",
                    so: "Somalia",
                    sr: "Suriname",
                    ss: "South Sudan",
                    st: "S\xe3o Tom\xe9 and Pr\xedncipe",
                    sv: "El Salvador",
                    sx: "Sint Maarten",
                    sy: "Syria",
                    sz: "Swaziland",
                    tc: "Turks and Caicos Islands",
                    td: "Chad",
                    tf: "French Southern Territories",
                    tg: "Togo",
                    th: "Thailand",
                    tj: "Tajikistan",
                    tk: "Tokelau",
                    tl: "Timor-Leste",
                    tm: "Turkmenistan",
                    tn: "Tunisia",
                    to: "Tonga",
                    tr: "T\xfcrkiye",
                    tt: "Trinidad and Tobago",
                    tv: "Tuvalu",
                    tw: "Taiwan",
                    tz: "Tanzania",
                    ua: "Ukraine",
                    ug: "Uganda",
                    us: "United States",
                    uy: "Uruguay",
                    uz: "Uzbekistan",
                    va: "Vatican City",
                    vc: "Saint Vincent and the Grenadines",
                    ve: "Venezuela",
                    vg: "British Virgin Islands",
                    vi: "U.S. Virgin Islands",
                    vn: "Vietnam",
                    vu: "Vanuatu",
                    wf: "Wallis and Futuna",
                    ws: "Samoa",
                    ye: "Yemen",
                    yt: "Mayotte",
                    za: "South Africa",
                    zm: "Zambia",
                    zw: "Zimbabwe",
                    zz: "Unknown or Invalid Region"
                },
                country_header: "Country",
                location_tooltip: "Users are counted per location and a single user can therefore be counted at multiple locations. Locations based on users' IP addresses. Data not available for all users.",
                percentage_header: "Percentage",
                title: "Geographic Statistics",
                top_cities: {
                    title: "Cities (Top 100)",
                    title_last_month: "Cities (Last Month, Top 100)"
                },
                top_countries: {
                    title: "Countries",
                    title_last_month: "Countries (Last Month)"
                },
                users_header: "Users"
            },
            item_visits: {
                actions_header: "Actions",
                avg_visits_header: "Average Visits",
                copy_id: "Copy ID",
                item_content_type_header: "Content Type",
                item_exercise_type_header: "Exercise Type",
                item_title_header: "Item",
                per_item_title: "Per Item",
                per_type_title: "Per Type",
                position_header: "Position",
                title: "Item Visits",
                type_header: "Type",
                unique_users_header: "Unique Users",
                visits_header: "Visits"
            },
            news: {
                course: {
                    title: "Course Announcements"
                },
                course_title_header: "Course title",
                disabled_header: "Disabled",
                error_header: "Error",
                global: {
                    title: "Global News"
                },
                newest_header: "Newest",
                news_title_header: "News title",
                oldest_header: "Oldest",
                progress_header: "Progress",
                read_header: "Read",
                readstate_progress_header: "ReadState Progress",
                state_header: "Status",
                state_text: {
                    text_disabled: "disabled",
                    text_error: "error",
                    text_failed: "failed",
                    text_preparing: "preparing",
                    text_sending: "sending",
                    text_sent: "sent",
                    text_success: "success"
                },
                success_header: "Success",
                title: "News Statistics",
                total_header: "Total"
            },
            no_data_message: "No data available",
            pinboard: {
                member_header: "Member",
                most_active: {
                    title: "Most active users"
                },
                posts_header: "Posts",
                teaching_team: {
                    title: "Teaching team activity"
                },
                threads_header: "Topics",
                title: "Forum Statistics"
            },
            qcalerts: {
                actions_header: "Actions",
                course_header: "Course",
                ignore: "Ignore",
                ignore_for_all: "Ignore for all",
                inspect: "Inspect",
                no_alerts: "No alerts :)",
                problem_header: "Problem",
                severity_header: "Severity",
                status_header: "Status",
                title: "QC Alerts",
                updated_at_header: "Updated at"
            },
            quiz: {
                actions_header: "Actions",
                avg_performance_header: "Average Performance",
                avg_submit_duration_header: "Average Submit Duration",
                copy_id: "Copy ID",
                graded: "Graded Quizzes",
                item_title_header: "Item",
                position_header: "Position",
                selftest: "Selftests",
                submission_count_header: "Submission Count",
                submission_perf_dist: "Submission Performance Distribution per Quiz",
                submission_user_count_header: "Unique Users",
                survey: "Surveys",
                title: "Quiz Statistics",
                unlimited_time: "unlimited time"
            },
            referrer: {
                count_header: "Count",
                site_header: "Traffic Source (Referrer URL)",
                title: "Referrer Statistics"
            },
            request_error_message: "Could not load data!",
            rich_texts: {
                actions_header: "Actions",
                copy_id: "Copy ID",
                earliest_timestamp_header: "Earliest Click",
                item_title_header: "Item",
                latest_timestamp_header: "Latest Click",
                link_clicks: "Link Clicks",
                link_header: "Link",
                position_header: "Position",
                title: "Text Items",
                total_clicks_header: "Total Clicks",
                total_clicks_unique_users_header: "By Unique Users"
            },
            social: {
                course_shares: {
                    "30days": {
                        title: "Course Shares (Last 30 Days, Top 25)"
                    },
                    "7days": {
                        title: "Course Shares (Last 7 Days, Top 25)"
                    },
                    count_header: "Count",
                    service_header: "Service",
                    total: {
                        title: "Course Shares (Total, Top 25)"
                    }
                },
                title: "Social Shares"
            },
            tooltip: {
                afw_column: "The 'Average Farthest Watched by Users' metric is derived from the greatest timestamp of all captured video interactions per user.",
                hls_column: "'HLS Video Downloads' are only available in the native mobile apps.",
                position_column: "The 'Position' column is composed of the position of the (a) section in the course and (b) item in the section, separated by a point (a.b).",
                seek_column: "'Seeks' refer to changing the playback time of the video using the progress bar, with which the user can skip forward or backward."
            },
            videos: {
                actions_header: "Actions",
                avg_farthest_watched_header: "Average Farthest Watched by Users",
                backward_seeks_header: "Backward Seeks",
                copy_id: "Copy ID",
                duration_header: "Duration",
                forward_seeks_header: "Forward Seeks",
                item_title_header: "Item",
                plays_header: "Played by Users",
                position_header: "Position",
                title: "Videos",
                user_interactions: "User Interactions"
            }
        },
        teachers: {
            edit: {
                edit_teacher: "Edit teacher information"
            },
            form: {
                description_explanation: "The bio must be given in at least one language.",
                description_label: "Bio (%{language})"
            },
            index: {
                description: "Bio",
                details: "Details",
                filter: "Filter by name:",
                name: "Name",
                new: "New teacher",
                search: "Search",
                title: "Teachers"
            },
            new: {
                create_teacher: "Create a teacher"
            },
            show: {
                description: "Bio",
                edit: "Edit teacher information",
                picture: "Picture"
            }
        },
        user_tests: {
            create: {
                new: "New User Test"
            },
            edit: {
                edit_user_test: "Edit User Test"
            },
            form: {
                add_metric: "Add metric",
                add_test_group: "Add test group",
                day_of_week_effects_hint: "Beware of day of week effects. It's better to run a test for a multiple of full weeks.",
                filter_hint: 'Examples: "gender == female", "enrollments < 2". Supported fields are all profile fields and enrollments, teacher and admin. Supported operators are ==, !=, in, <, >, <=, >=, << (between), <=<=. Enter several filters comma-separated. The values can either be strings, integers or comma-separated lists, depending on the operator.',
                label: {
                    end_date: "End Date",
                    max_participants: "Maximum of Participants",
                    start_date: "Start Date"
                },
                test_group_name: "Test Group %{number}",
                test_groups: "Test Groups",
                test_groups_hint: "Comma-separated list of group names"
            },
            index: {
                course: "Course",
                details: "Details",
                edit: "Edit",
                end_date: "End Date",
                name: "Name",
                start_date: "Start Date",
                user_tests: "User Tests"
            },
            metric: {
                metric_wait_interval_hint: "Time interval in which the metric is evaluated."
            },
            new: {
                new_user_test: "New User Test",
                none: "none"
            },
            show: {
                active: "active",
                alternative: "Alternative",
                back_to_list: "Back to list",
                confidence: "Confidence",
                confidence_error: "Error in confidence calculation",
                control: "\xa0(Control)",
                course: "Course",
                delete: "Delete",
                details: "Details",
                download: "Export results to CSV",
                edit: "Edit",
                effect: "Estimated Effect",
                end_date: "End Date",
                filters: "Filters",
                identifier: "Identifier",
                max_participants: "Max. Participants",
                mean: "Mean",
                metric: "Metric",
                name: "Name",
                "non-finished": "Non-Finished",
                participants: "Participants",
                required_participants: "Required participants",
                required_participants_hint: "(for effect size 0.5 and power 0.8)",
                start_date: "Start Date",
                total: "Total",
                waiting: "Waiting"
            }
        },
        users: {
            create: {
                new: "New User"
            },
            form: {
                confirmed: "Confirmed",
                label: {
                    email: "E-mail:",
                    full_name: "Name:",
                    password: "Password:",
                    submit: "Submit"
                },
                placeholder: {
                    email: "E-mail",
                    full_name: "Name",
                    password: "Password"
                }
            },
            index: {
                confirmed: "Confirmed",
                confirmed_false: !1,
                confirmed_true: !0,
                details: "Details",
                display_name: "Display Name",
                email: "Email",
                filter: "Filter by name or email:",
                go: "Go",
                search: "Search",
                search_by_auth_uid: "Search user by SSO ID:",
                title: "Users"
            },
            new: {
                create_user: "Create a user"
            }
        },
        video_providers: {
            form: {
                credentials_info: {
                    kaltura: 'Your Kaltura account administrator will need to <a href="https://developer.kaltura.com/api-docs/VPaaS-API-Getting-Started/application-tokens.html">create an application token</a> with the privileges to access the videos you would like to share. The following fields can be filled from the attributes of this token. <strong>Note:</strong> The token must be created with the hash type "SHA256".',
                    vimeo: 'With your Vimeo account, <a href="https://developer.vimeo.com/apps/new">create a new private API app</a>. After you have configured the app, you can generate a "personal access token" for this app and enter it here. Make sure that the token has at least the scopes <strong>private, create, edit, delete, interact, video_files, public</strong>.'
                }
            },
            index: {
                confirm: "Are you sure?",
                copy_id: "Copy ID",
                delete: "Delete",
                deleting: "Deleting",
                edit: "Edit",
                id: "ID",
                name: "Name",
                new_provider: "Create new video provider",
                status: {
                    completed: "Sync completed, started at %{begin}",
                    never: "Never synced",
                    running_since: "Sync running since %{begin}"
                },
                sync_status: "Sync Status",
                token: "Token"
            },
            title: "Video Providers"
        },
        videos: {
            index: {
                confirm: "Are you sure?",
                copy_id: "Copy ID",
                created_at: "Added on",
                delete: "Delete",
                deleting: "Deleting...",
                dimensions: "Dimensions",
                duration: "Duration",
                edit: "Edit",
                filter_videos: "Filter videos starting with:",
                hd_stream: "HD",
                headline: "Videos (all Streams)",
                hls_stream: "HLS",
                id: "ID",
                poster: "Poster",
                provider: "Provider",
                quality: "Quality",
                sd_stream: "SD",
                search: "Search",
                synchronize_database: "Synchronize with all providers",
                title: "Title"
            },
            provider_type: {
                kaltura: "Kaltura",
                vimeo: "Vimeo"
            }
        }
    },
    announcements: {
        edit: {
            headline: "Edit announcement"
        },
        form: {
            save: "Save",
            save_and_send: "Save and send",
            save_and_test: "Save and send test mail",
            translation_hint: "If available, you can provide translations for users speaking other languages here. For languages you omit, the system will automatically fall back to the default language above.",
            translations: "Translations"
        },
        new: {
            headline: "New announcement"
        },
        no_news: "There are currently no news to announce. Please come back later.",
        operations: {
            delete: "Delete",
            edit: "Edit",
            new: "Create new announcement"
        },
        title: "News"
    },
    browser_warning: {
        browser_ie: "You are running Internet Explorer 10 or Microsoft Edge 28 or lower versions.",
        headline: "Your browser is not supported!",
        headline_soft: "Your browser is not fully supported!",
        text_hide: "Click here to hide this warning permanently.",
        text_ie: "That browser is not supported by %{brand} any longer, <b>you will not be able to use crucial functionality such as the playback of videos.</b> Please update your Internet Explorer or use a current version of an alternative browser before you continue (we recommend <a href='http://www.mozilla.org/firefox/new/'>Mozilla Firefox</a> or <a href='https://www.google.com/chrome/'>Google Chrome</a>).",
        text_other: "You are running an outdated browser version, which is not fully supported by %{brand}. <b>You might not be able to use crucial functionality such as the submission of quizzes</b>. Please update your browser to the latest version before you continue (we recommend <a href='http://www.mozilla.org/firefox/new/'>Mozilla Firefox</a> or <a href='https://www.google.com/chrome/'>Google Chrome</a>)."
    },
    buttons: {
        hide_advanced_settings: "Hide advanced settings",
        show_advanced_settings: "Advanced settings"
    },
    certificate: {
        template: {
            born_v1: "born on: %{birthday}",
            born_v2: "Date of birth: %{birthday}",
            born_v3: "%{birthday}",
            email_v2: "E-mail: %{email}",
            score_v1: "%{points} out of %{max_points} possible points (%{percent}%)",
            score_v2: " %{points} points (%{percent}%) ",
            score_v3: "%{points} / %{max_points} points (%{percent}%)",
            top_v1: "Is part of the top %{top}% active course participants.",
            top_v2: "The candidate belongs to the top %{top}% of the course participants.",
            verify: "Verify online: %{verification_url}"
        }
    },
    certificate_templates: {
        edit: {
            headline: "Edit certificate Template (id: ",
            help_on: "Help on creating templates: "
        },
        form: {
            certificate: "Certificate",
            certificate_type: "Certificate Type",
            confirmation_of_participation: "Confirmation of Participation",
            course_code: "Course Code",
            create_template: "Create template",
            dynamic_content: "Dynamic content",
            dynamic_content_placeholder: "svg to get dynamic data into the certificate",
            file: "File",
            qrcode_x: "Qrcode x",
            qrcode_y: "Qrcode y",
            record_of_achievement: "Record of Achievement"
        },
        index: {
            actions: "Actions",
            course: "Course",
            course_code: "Course Code",
            download: "Download",
            edit: "Edit",
            headline: "Record templates",
            new: "Add new template",
            preview: "Preview",
            type: "Type"
        },
        new: {
            headline: "New Certificate-Template"
        }
    },
    certificates: {
        form: {
            placeholder: {
                description: "Some description might be helpful",
                name: "Enter a name"
            }
        },
        index: {
            actions: "Actions",
            confirm_delete: "Are you sure that you want to delete this record?",
            course: "Course",
            delete: "Delete",
            download: "Download",
            email_name: "Email or Name",
            error: "Error",
            headline: "Certificates",
            id: "id",
            info_text: "Search for user:",
            render_state: {
                denied: "denied",
                error: "error",
                rendered: "rendered",
                requested: "requested"
            },
            show_all: "Show all certificates",
            show_errors: "Show only errors",
            template: "Template",
            user: "User"
        }
    },
    channels: {
        show: {
            about: "About the <b>%{name}</b> Course Series",
            empty: "Unfortunately, we could not find any courses in this channel that match your search.",
            empty_state: "There are no courses available in this channel yet.",
            filter: {
                search: "Search"
            },
            next: "Next",
            previous: "Previous"
        },
        show_details: "Show course details",
        view_all: "View all courses"
    },
    chatbot: {
        greeting: "Hello! Welcome to the %{site_name} Support Chat. How may I help you?",
        placeholder: "Write a message",
        send: "Send",
        text: "The chatbot is happy to help you with your technical problem. Feel free to start a conversation by asking a question in English!"
    },
    components: {
        actions_dropdown: {
            aria_label: "More actions"
        },
        date_time_picker: {
            clear: "Clear",
            today: "Set to today"
        },
        filter_bar: {
            filter: {
                adjust: "Adjust",
                all: "All",
                divider: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
                reset: "Reset all filters",
                results: "Results for:",
                results_count: {
                    one: "%{count} course",
                    other: "%{count} courses"
                }
            },
            search: {
                clear: "Clear search",
                label: "Search"
            }
        },
        markdown_editor: {
            help: "Markdown Editing Help"
        },
        popover: {
            close: "Close",
            hide_hint_btn: "Don't show hint again",
            title: "Did you know?"
        }
    },
    course: {
        admin: {
            certificate_templates: {
                edit: {
                    headline: "Edit Certificate Template"
                },
                headline: "Certificate and Open Badges Templates",
                index: {
                    actions: "Actions",
                    confirm_delete: "Are you sure to delete this template?",
                    delete: "Delete",
                    download: "Download",
                    edit: "Edit",
                    empty_msg: "There are no certificate templates available.",
                    new: "Add new template",
                    preview: "Preview",
                    record_count: "Issued records",
                    type: "Type"
                },
                new: {
                    headline: "New Certificate Template"
                }
            },
            item_stats: {
                facts: {
                    visits: "<span>%{visits}</span> visits in total by <span>%{users}</span> users",
                    visits_last_24h: "<span>%{visits}</span> visits in the last 24 hours by <span>%{users}</span> users"
                },
                quiz: {
                    answers: "Answers",
                    avg_essay_length: "Average Essay Length",
                    avg_points: "Average Points",
                    base_stats: "%{correct} correct and %{incorrect} wrong submissions | %{percentage_avg}% avg. perf.",
                    base_stats_w_partly_correct: "%{correct} correct, %{partly_correct} partly correct and %{incorrect} wrong submissions | %{percentage_avg}% avg. perf.",
                    characters: "Characters",
                    max_ponts: "Total Points",
                    multiple_answers: "Multiple Answers",
                    no_submission: "No submissions yet.",
                    points: "<span>%{avg}</span> (%{percentage_avg}%) of <span>%{max_points}</span> total points on average",
                    request_submission_report: "For a <strong>complete list</strong> of submitted answers, please request a <strong>submission report</strong> for the quiz-id %{id}.",
                    request_submission_report_link: "For a <strong>complete list</strong> of submitted answers, please request a <a href='%{link}'>submission report</a> for the quiz-id %{id}.",
                    submission_limit_exceeded: "This quiz has too many submissions to show further statistics.",
                    submissions: "<span>%{submissions}</span> submissions by <span>%{users}</span> users",
                    submissions_over_time: "Submissions over Time",
                    time: "users needed <span>%{seconds} s</span> of allowed <span>%{limit} s</span> on average",
                    total_submissions: "Total Submissions",
                    total_user: "Unique Users",
                    unique_answers: "One-Time Answers",
                    unknown_type: "No stats available for this question type yet."
                },
                result: {
                    no_submission: "No submissions yet.",
                    perfect_submissions: "<span>%{submissions}</span> perfect submissions with all points by <span>%{users}</span> users",
                    points: "<span>%{avg}</span> (%{percentage_avg}%) of <span>%{max_points}</span> total points on average",
                    submission_limit_exceeded: "This item has too many submissions to show further statistics.",
                    submissions: "<span>%{submissions}</span> submissions by <span>%{users}</span> users",
                    submissions_over_time: "Submissions over Time"
                },
                rich_text: {
                    earliest_click: "earliest click at %{date}",
                    latest_click: "latest click at %{date}",
                    link_clicks: "Link Clicks",
                    total_clicks: "<span>%{clicks}</span> clicks on links by <span>%{users}</span> users"
                },
                show: {
                    select_item: "Select an item",
                    show_item: "Show item",
                    title: "Item Details"
                },
                unknown: {
                    statement: "No further stats available for this item type yet."
                },
                video: {
                    backward_seeks: "seeked <span>%{seeks}</span> times backward",
                    count: "Event Count",
                    farthest_watched: "watched till <span>%{farthest_watched}%</span> by all users on average",
                    forward_seeks: "seeked <span>%{seeks}</span> times forward",
                    plays: "played by <span>%{plays}</span> users",
                    time_in_s: "Time in Seconds",
                    user_interactions: "User Interactions over the Video Duration"
                }
            },
            objectives: {
                edit: {
                    headline: "Edit Objective"
                },
                form: {
                    add_learning_unit: "Add Learning Unit",
                    completion_type_prompt: "Select the Completion Type",
                    completion_types: {
                        xikolo_course_completion: "Course completion (RoA)",
                        xikolo_course_exploration: "Course exploration (CoP)",
                        xikolo_topic_completion: "Topic completion"
                    },
                    learning_units: "Learning Units",
                    no_learning_units: "Currently, there are no learning objectives for this objective."
                },
                headline: "Learning Objectives",
                index: {
                    actions: "Actions",
                    add_objective: "Add Objective",
                    completion_type: "Completion Type",
                    confirm_delete: "Are you sure?",
                    delete: "Delete",
                    description: "Description",
                    edit: "Edit",
                    no_objectives: "Currently, there are no objectives for this course.",
                    position: "Position",
                    title: "Title"
                },
                learning_unit: {
                    acquisition_items: "Kowledge acquisition items",
                    examination_items: "Kowledge examination items",
                    existing_unit: "Unit #%{priority} (ID: %{id})",
                    new_unit: "New Unit"
                },
                new: {
                    headline: "New Objective"
                }
            },
            open_badge_templates: {
                edit: {
                    headline: "Edit Open Badge Template"
                },
                index: {
                    badge_count: "Badges issued",
                    confirm_delete: "Are you sure to delete this Open Badge template?",
                    delete: "Delete",
                    description: "Description",
                    download: "Download",
                    edit: "Edit",
                    empty_msg: "There are no Open Badge templates available.",
                    image: "Image",
                    name: "Name",
                    new: "Add new template"
                },
                new: {
                    headline: "New Open Badge Template"
                }
            },
            visuals: {
                back: "Back to course editor",
                edit: "Edit visuals"
            }
        },
        card: {
            button_details: "Details",
            button_enroll: "Enroll",
            button_reactivate_course: "Reactivate",
            button_resume: "Resume",
            button_visit: "Visit",
            buttons_menu: {
                completed: "Mark as completed",
                details: "Show details"
            },
            certificate: "Highest achievable certificate",
            classifiers: "Course classifiers",
            cop: "Confirmation of Participation",
            date: "Course dates",
            label: {
                reactivated: "Reactivated"
            },
            language: "Course language and subtitles available",
            language_and_subtitles: "%{language} + %{subtitle_languages} subtitles",
            qc_html: "Certificate / ECTS",
            roa: "Record of Achievement"
        },
        certificates: {
            achieved_state: "Achieved",
            in_progress_state: "In Progress",
            intro_guidelines_html: 'Find out more in the <a href="/pages/certificate_guidelines">certificate guidelines</a>.',
            intro_text: "This page lists your personal achievements in this course. See what you can achieve, what you have achieved and when the records will become available for download!",
            intro_title: "What can I find here?",
            requirements: "Requirements"
        },
        courses: {
            announcements: {
                ago: "%{timeago} ago",
                delete: "Delete",
                edit: "Edit",
                empty_state: "There are no announcements yet. Check again after the course started.",
                new: "Add new course announcement",
                title: "Course announcements",
                unpublished: "unpublished"
            },
            create: {
                edit: "Edit course"
            },
            date: {
                beginning: "Coming soon",
                coming_soon: "Coming soon",
                range: "%{start_date} - %{end_date}",
                self_paced_since: "Self-paced"
            },
            enrollment_statistics: {
                course_end: {
                    title: "Course End"
                },
                course_start: {
                    title: "Course Start"
                },
                current: {
                    date: "Today",
                    title: "Current"
                },
                currently_enrolled: "Learners enrolled",
                heading: "Learners"
            },
            index: {
                action: "Show all courses",
                archive: "Self-paced courses",
                current: "Current courses",
                empty: "Unfortunately, we could not find any courses that match your search.",
                empty_state: "There are no courses available yet.",
                error: "An error occurred while loading additional courses. Please try again later.",
                filter: {
                    channel: "Channel",
                    language: "Language",
                    status: "Status",
                    submit: "Filter"
                },
                filter_by: "Filter by text",
                load_more: "Load more courses",
                loading: "Looking for courses...",
                placeholder: "What would you like to learn?",
                reactivation_upsell_html: "You now have the opportunity to earn a Record of Achievement for many courses in self-paced mode. Learn more about our <a href='/pages/course_reactivation' target='_blank'> course reactivation option</a>.",
                upcoming: "Upcoming courses"
            },
            rating: {
                details: "This course was rated with <b><span itemprop='ratingValue'>%{stars}</span> stars</b> in average from <b><span itemprop='ratingCount'>%{votes}</span> votes</b>.",
                headline: "Rating"
            },
            show: {
                about_content: "Course information",
                button_enroll: "Enroll me now",
                button_register: "Register now",
                categories: "Tracks",
                certificates: "Certificate Requirements",
                content: "Course contents",
                cop_requirements: "Gain a <b>Confirmation of Participation</b> by completing at least <b>%{cop_threshold}%</b> of the course material.",
                course_runtime: "Runs from",
                dates_and_stats: "Dates and Statistics",
                enrollment_policy: {
                    overlay: {
                        accept: "I have read and agree to the disclaimer.",
                        link: "Show disclaimer",
                        text: "Before you can be enrolled for the course, you have to read and agree to the course producer\u2019s disclaimer.",
                        title: "Enroll for"
                    }
                },
                external_course: {
                    headline: "External course",
                    info: "This course is not running on %{brand}, but on an external learning platform. When following the link to this featured course, you will leave the %{brand} website. You might need an dedicated user account on the external platform to be able to enroll to the course."
                },
                featured_items: {
                    title: "Featured content"
                },
                guidelines_link: "",
                how_to_enroll: "Enroll me for this course",
                how_to_enroll_text: "The course is free. Just register for an account on %{brand} and take the course!",
                how_to_register_text: "For this course, you must register directly with the course provider.",
                invite_only_notice: "You must be invited to enroll in this course.",
                language: "Language",
                learning_goals: "What you'll learn",
                open_mode: {
                    text: "You can watch most of our course videos right away! No login required."
                },
                qc_guidelines_link: "Find out more in the <a href='/pages/document_types'>certificate guidelines</a>.",
                qc_requirements: "Gain a <b>Certificate</b> by booking it <b>and</b> gaining a Record of Achievement.",
                reactivate_course: {
                    headline: "Reactivate this course",
                    notice: "You can access all graded assignments and earn a Record of Achievement with the <a href='/pages/course_reactivation' target='_blank'>course reactivation option</a>. Learn more or ",
                    upgrade_now: "reactivate now!"
                },
                roa_requirements: "Gain a <b>Record of Achievement</b> by earning at least <b>%{roa_threshold}%</b> of the maximum number of points from all graded assignments.",
                target_groups: "Who this course is for",
                teacher_title: "This course is offered by",
                user_enrolled: "You are enrolled."
            }
        },
        progress: {
            overview: {
                continue: "Continue Learning",
                empty_msg: "There is no overview available for this course.",
                open_mode: {
                    enroll: "Enroll yourself",
                    item: "This learning unit cannot be previewed. Please enroll for the course to proceed.",
                    message: "The listed learning units belong to the course <b>%{title}</b>. Do you want to access all course content?"
                }
            },
            progress_table: {
                assignments: "Assignments",
                bonus: "Bonus",
                selftests: "Self-tests",
                total: "Total",
                visited: "Visited"
            },
            records: {
                certificates_tab_info: "As soon as the course has finished (and the teaching staff have published the final results), you can <a href='./certificates'>download your certificates on the new certificate page</a>.",
                documents_guideline: "",
                documents_headline: "My course certificates",
                documents_intro: "As soon as the course has finished (and the teaching staff have published the final results), you can download your certificates here."
            },
            show: {
                download_cert: "Download Record of Achievement",
                download_part: "Download Confirmation of Participation",
                empty_msg: "There are no items yet, so we cannot show you any progress now. Come back later.",
                item_locked: " (locked)",
                items_visited: "%{visited} of %{existing} visited",
                na: "-",
                not_taken: "not taken yet",
                of: "of",
                overall: "Overall",
                points: "Points",
                quizzes_graded: "%{graded} of %{count} graded",
                quizzes_taken: "%{taken} of %{count} taken",
                take_now: "Take now"
            }
        },
        redeem_voucher: {
            cancel: "Back to course",
            course_reactivation: {
                info_text: "If you would like to purchase a voucher code for the course reactivation, please visit the <a href='%{link}' target='_blank' rel='noopener'>Shop</a>. For pricing details and more information check our page on the <a href='/pages/course_reactivation' target='_blank' rel='noopener'>course reactivation</a>.",
                info_title: "Don't have a voucher code?",
                text: "If you have already purchased a voucher for the <a href='/pages/course_reactivation' target='_blank' rel='noopener'>course reactivation</a> from the <a href='%{link}' target='_blank' rel='noopener'>Shop</a>, enter the reactivation code below. Once you redeem the voucher code, you will have <b>%{weeks} weeks</b> to complete the requirements to earn a Record of Achievement.",
                title: "Reactivate this course"
            },
            for_course: "You are going to redeem a voucher for the following course:",
            proctoring_smowl: {
                info_text: "If you would like to purchase a voucher code for the Certificate, please visit the <a href='%{link}' target='_blank' rel='noopener'>%{brand} shop</a>. For pricing details and more information check our page on the <a href='/pages/document_types' target='_blank' rel='noopener'>Certificate</a>.",
                info_title: "Don't have a voucher code?",
                text: "Once you redeem the voucher code, you will be taken to the calibration of the online proctoring for the graded assignments. Please make sure you are using a <a href='https://smowl.net/en/faqs-proctoring-smowl/requirements/' target='_blank' rel='noopener'>compatible browser for proctored exams</a> before redeeming the voucher.",
                title: "Book a Certificate"
            }
        }
    },
    courses: {
        ago: "%{timeago} ago",
        nav: {
            admin: {
                alerts: "View issues",
                certificate_templates: "Certificate Templates",
                open_badge_templates: "Open Badge Templates"
            },
            announcements: "Announcements",
            certificates: "Certificates",
            discussions: "Discussions",
            info: "Course Details",
            knowledge_documents: "Documents",
            learning_rooms: "Collab Space",
            progress: "Progress",
            sections: "Learnings",
            syllabus: "Overview",
            teacher: {
                activity: "Activity",
                administration: "Course Administration",
                alerts: "Alerts",
                announcements: "Announcements",
                certificates: "Certificates",
                content: "Structure & Content",
                dashboard: "Dashboard",
                downloads: "Downloads",
                enrollments: "Enrollments",
                forum: "Forum moderation",
                forum_stats: "Forum",
                geo: "Geographic",
                grading: "Submissions",
                item_details: "Item details",
                item_visits: "Item visits",
                lti: "LTI providers",
                objectives: "Learning objectives",
                peer_assessment: "Peer assessments",
                permissions: "Permissions",
                pin: "Pin menu",
                quizzes: "Quizzes",
                referrers: "Referrers",
                rich_texts: "Text items",
                settings: "Settings",
                social: "Social shares",
                transpipe: "Subtitles (in TransPipe)",
                videos: "Videos",
                visuals: "Visuals",
                welcome: "Welcome, teacher!"
            }
        },
        prerequisites: {
            button_trigger_reactivation: "Reactivate for free",
            explain_completion: "You must successfully complete these prerequisites in order to take part in this course.",
            facts: {
                fulfilled_cop: "You gained a Confirmation of Participation in this course.",
                fulfilled_roa: "You gained a Record of Achievement in this course.",
                missing_cop: "You have not gained a Confirmation of Participation in this course.",
                missing_roa: "You have not gained a Record of Achievement in this course."
            },
            headline: "Prerequisites",
            reactivation_modal: {
                button_cancel: "Maybe later",
                button_confirm: "Reactivate now",
                error: "Something went wrong. Please contact the helpdesk.",
                text: "You will be granted <strong>one course reactivation for free</strong>. Once you reactivate, you will have eight weeks to complete the course and earn your Record of Achievement.",
                title: 'Reactivating "%{course}"'
            },
            status_text: {
                one: "one course incomplete",
                other: "%{count} courses incomplete",
                zero: "all set!"
            },
            success_modal: {
                text: 'The course "%{course}" has been reactivated.',
                title: "Great!"
            }
        },
        preview: {
            button_details: "Show course details",
            button_enroll: "Enroll me for this course",
            button_enter: "Enter course",
            button_goto_external: "Go to external course",
            button_progress: "Show my progress",
            button_quit: "Un-enroll",
            button_reactivate_course: "Reactivate this course",
            has_started: "The course has already started.",
            proctoring: {
                booked: "You have booked a Certificate.",
                register_with_smowl: "Please calibrate your image with our partner.",
                upgrade_not_possible: "Booking a Certificate is no longer possible."
            },
            unenrollment_disabled: "To un-enroll from the course, contact the course provider."
        }
    },
    dashboard: {
        completed: "Completed",
        documents: {
            divergent_certificate_requirements: "Divergent certificate requirements, see <a href='/courses/%{course_code}'>course details</a>.",
            my_documents: "My certificates",
            my_documents_hint: "Hint: if you want your date of birth printed on your certificates, you can choose this option in your <a href='/preferences'>settings</a>.",
            my_upcoming_courses: "My upcoming courses",
            no_documents: "There are no certificates available yet.",
            not_yet_published: "The certificates for this course are not yet published. As soon as they\u2019re available, you\u2019ll receive an email notification. This  usually happens within one week after the final exam due date.",
            proctoring_chart: "Online proctoring results",
            text: ""
        },
        other_courses: "Course Recommendations",
        profile: {
            about_me: "About me",
            about_me_text: "Tell other users a little bit about yourself.",
            add_email: "Add a new e-mail address",
            additional_info: "Additional information",
            additional_info_text: "This information is used for statistical analysis that help us to improve our services. Before processing, the information is pseudonymized. There is no public access to these data.",
            additional_languages: "Additional languages",
            affiliation: "What is your professional affiliation?",
            age: "How old are you?",
            areas_of_interest: "Which areas of learning most interest you? (Select all that apply)",
            authorizations: {
                add_other_title: "Connect another identity",
                confirm_delete: "Do you really want to disconnect this login from your account?",
                empty_msg: "You don't have any third-party login connected to your profile. You can choose any Enterprise login below.",
                invite_to_switch: "<b>Would you like to switch your Social or Enterprise Login to another identity?</b> Connect the new identity first. You can then delete the Single Sign-On entry that you no longer need.",
                title: "Social and Enterprise Logins"
            },
            background_in_IT: "Background in ICT",
            background_it: "Background in IT",
            birthdate: "Date of birth",
            career: "Professional experience",
            career_status: "Career status",
            change_password: "Change password",
            change_password_callout: "After changing your credentials, you will need to log in again in other browsers.",
            change_password_text: "To change your password, you must also enter your old password. If you don't remember that please log out and use the <i>Forgot password</i> button in the login form.",
            city: "City",
            combodate_format: "YYYY-MM-DD",
            combodate_template: "MMMM DD, YYYY",
            combodate_viewformat: "MMMM D, YYYY",
            computer_use: "Regular computer use",
            country: "Country of Nationality",
            course_features: "When following online courses, which facets and features best help you learn? (Select all that apply)",
            current_email: "Your current primary e-mail address is <i>%{email}</i>.",
            delete_account: "Delete account",
            delete_account_buttontext: "Delete account",
            delete_account_confirm_text: "Are you sure you want to do this? It will permanently delete your account and any learning content in it!",
            delete_account_text: "You can permanently delete your account on %{brand} here:",
            display_name: "Display name",
            display_name_text: "This is how your name will be shown on the platform.",
            education: "Highest degree",
            email_already_taken: "The appointed e-mail address is already in use.",
            error_message: "Unfortunately, the data could not be saved. Your input might be invalid. Please check your input and try again.",
            gamification: {
                badges: "Badges"
            },
            gender: "What's your gender?",
            highest_degree: "Highest degree",
            identities: "Connected identities",
            motivation: "Main motivation for joining %{brand}",
            my_profile: "My profile",
            name: "Name",
            name_text: "This is how your name will be shown on the Record of Achievement.",
            new_password: "New password",
            not_set: "Not set.",
            occupation: "Country you currently live in",
            old_password: "Old password",
            password: "Password",
            password_confirmation: "Confirm password",
            pending_email_change: "There is a pending e-mail change request!",
            pointer_to_openwho: "Where did you hear about the OpenWHO platform?",
            position: "Position",
            primary_email: "your primary e-mail address",
            primary_email_suspended: "Your primary e-mail address is currently suspended. Did you resolve the issues with your e-mail account?",
            primary_language: "Preferred language",
            professional_life: "Professional life",
            reactivate: "Reactivate e-mail",
            required_info: "Required information",
            resulting_display_name: "Your resulting display name",
            secondary_emails: {
                confirm_delete: "Are you sure to delete this e-mail address?",
                confirm_promote: "Are you sure to change your primary e-mail address?",
                delete: "Delete",
                hide: "Hide",
                promote: "Make primary",
                show: "Show",
                title: "Other e-mails associated with this account"
            },
            select_birthdate: "Please select",
            service_unavailable: "The service is currently unavailable. Please try again later.",
            settings: {
                additional_languages: {
                    aa: "Afar",
                    ab: "Abkhazian",
                    ae: "Avestan",
                    af: "Afrikaans",
                    ak: "Akan",
                    am: "Amharic",
                    an: "Aragonese",
                    ar: "Arabic",
                    as: "Assamese",
                    av: "Avaric",
                    ay: "Aymara",
                    az: "Azerbaijani",
                    ba: "Bashkir",
                    be: "Belarusian",
                    bg: "Bulgarian",
                    bh: "Bihari languages",
                    bi: "Bislama",
                    bm: "Bambara",
                    bn: "Bengali",
                    bo: "Tibetan",
                    br: "Breton",
                    bs: "Bosnian",
                    ca: "Catalan; Valencian",
                    ce: "Chechen",
                    ch: "Chamorro",
                    co: "Corsican",
                    cr: "Cree",
                    cs: "Czech",
                    cu: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
                    cv: "Chuvash",
                    cy: "Welsh",
                    da: "Danish",
                    de: "German",
                    dv: "Divehi; Dhivehi; Maldivian",
                    dz: "Dzongkha",
                    ee: "Ewe",
                    el: "Greek",
                    en: "English",
                    eo: "Esperanto",
                    es: "Spanish",
                    et: "Estonian",
                    eu: "Basque",
                    fa: "Persian",
                    ff: "Fulah",
                    fi: "Finnish",
                    fj: "Fijian",
                    fo: "Faroese",
                    fr: "French",
                    fy: "Western Frisian",
                    ga: "Irish",
                    gd: "Gaelic; Scottish Gaelic",
                    gl: "Galician",
                    gn: "Guarani",
                    gu: "Gujarati",
                    gv: "Manx",
                    ha: "Hausa",
                    he: "Hebrew",
                    hi: "Hindi",
                    ho: "Hiri Motu",
                    hr: "Croatian",
                    ht: "Haitian; Haitian Creole",
                    hu: "Hungarian",
                    hy: "Armenian",
                    hz: "Herero",
                    ia: "Interlingua (International Auxiliary Language Association)",
                    id: "Indonesian",
                    ie: "Interlingue; Occidental",
                    ig: "Igbo",
                    ii: "Sichuan Yi; Nuosu",
                    ik: "Inupiaq",
                    io: "Ido",
                    is: "Icelandic",
                    it: "Italian",
                    iu: "Inuktitut",
                    ja: "Japanese",
                    jv: "Javanese",
                    ka: "Georgian",
                    kg: "Kongo",
                    ki: "Kikuyu; Gikuyu",
                    kj: "Kuanyama; Kwanyama",
                    kk: "Kazakh",
                    kl: "Kalaallisut; Greenlandic",
                    km: "Central Khmer",
                    kn: "Kannada",
                    ko: "Korean",
                    kr: "Kanuri",
                    ks: "Kashmiri",
                    ku: "Kurdish",
                    kv: "Komi",
                    kw: "Cornish",
                    ky: "Kirghiz; Kyrgyz",
                    la: "Latin",
                    lb: "Luxembourgish; Letzeburgesch",
                    lg: "Ganda",
                    li: "Limburgan; Limburger; Limburgish",
                    ln: "Lingala",
                    lo: "Lao",
                    lt: "Lithuanian",
                    lu: "Luba-Katanga",
                    lv: "Latvian",
                    mg: "Malagasy",
                    mh: "Marshallese",
                    mi: "Maori",
                    mk: "Macedonian",
                    ml: "Malayalam",
                    mn: "Mongolian",
                    mr: "Marathi",
                    ms: "Malay",
                    mt: "Maltese",
                    my: "Burmese",
                    na: "Nauru",
                    nb: "Bokm\xe5l, Norwegian; Norwegian Bokm\xe5l",
                    nd: "Ndebele, North; North Ndebele",
                    ne: "Nepali",
                    ng: "Ndonga",
                    nl: "Dutch; Flemish",
                    nn: "Norwegian Nynorsk; Nynorsk, Norwegian",
                    no: "Norwegian",
                    not_set: "Not set",
                    nr: "Ndebele, South; South Ndebele",
                    nv: "Navajo; Navaho",
                    ny: "Chichewa; Chewa; Nyanja",
                    oc: "Occitan (post 1500); Proven\xe7al",
                    oj: "Ojibwa",
                    om: "Oromo",
                    or: "Oriya",
                    os: "Ossetian; Ossetic",
                    pa: "Panjabi; Punjabi",
                    pi: "Pali",
                    pl: "Polish",
                    ps: "Pushto; Pashto",
                    pt: "Portuguese",
                    qu: "Quechua",
                    rm: "Romansh",
                    rn: "Rundi",
                    ro: "Romanian; Moldavian; Moldovan",
                    ru: "Russian",
                    rw: "Kinyarwanda",
                    sa: "Sanskrit",
                    sc: "Sardinian",
                    sd: "Sindhi",
                    se: "Northern Sami",
                    sg: "Sango",
                    si: "Sinhala; Sinhalese",
                    sk: "Slovak",
                    sl: "Slovenian",
                    sm: "Samoan",
                    sn: "Shona",
                    so: "Somali",
                    sq: "Albanian",
                    sr: "Serbian",
                    ss: "Swati",
                    st: "Sotho, Southern",
                    su: "Sundanese",
                    sv: "Swedish",
                    sw: "Swahili",
                    ta: "Tamil",
                    te: "Telugu",
                    tg: "Tajik",
                    th: "Thai",
                    ti: "Tigrinya",
                    tk: "Turkmen",
                    tl: "Tagalog",
                    tn: "Tswana",
                    to: "Tonga (Tonga Islands)",
                    tr: "Turkish",
                    ts: "Tsonga",
                    tt: "Tatar",
                    tw: "Twi",
                    ty: "Tahitian",
                    ug: "Uighur; Uyghur",
                    uk: "Ukrainian",
                    ur: "Urdu",
                    uz: "Uzbek",
                    ve: "Venda",
                    vi: "Vietnamese",
                    vo: "Volap\xfck",
                    wa: "Walloon",
                    wo: "Wolof",
                    xh: "Xhosa",
                    yi: "Yiddish",
                    yo: "Yoruba",
                    za: "Zhuang; Chuang",
                    zh: "Chinese",
                    zu: "Zulu"
                },
                affiliation: {
                    goarn: "Global Outbreak Response and Alert Network (GOARN)",
                    health_expert: "Expert in public health, outbreaks and health emergencies",
                    health_insitute: "National health institute or similar organization",
                    health_ministry: "Ministry of Health",
                    healthcare_professional: "Medical or health professional, such as a clinician, nurse, midwife or pharmacist",
                    int_organisation: "International organization",
                    ngo: "Non-governmental organization",
                    not_set: "Not set",
                    other: "Other",
                    other_ministry: "Other concerned ministry",
                    student: "Student",
                    un_country_team: "UN country team, UN partner organization",
                    volunteer: "Volunteer",
                    who_staff: "WHO staff, consultant or roster member"
                },
                age: {
                    "20_to_29": "20 to 29 years",
                    "30_to_39": "30 to 39 years",
                    "40_to_49": "40 to 49 years",
                    "50_to_59": "50 to 59 years",
                    "60_to_69": "60 to 69 years",
                    gte_70: "70 years or older",
                    lt_20: "younger than 20 years",
                    not_set: "Not set"
                },
                areas_of_interest: {
                    capacity_building: "National capacity building",
                    emergency_operations: "Emergency operations",
                    emerging_topics: "New and emerging topics",
                    epidemiology: "Epidemiology and data",
                    healthy_ageing: "Healthy ageing",
                    leadership: "Management and leadership",
                    managing_epidemics: "Cross-cutting issues for managing epidemics, pandemics and other health emergencies",
                    other: "Other",
                    risk_communication: "Risk communication and social science interventions",
                    specific_epidemic_diseases: "Specific epidemic and pandemic prone diseases",
                    surge_training: "Surge training"
                },
                background_it: {
                    advanced: "Advanced",
                    beginner: "Beginner",
                    expert: "Expert",
                    none: "None"
                },
                career_status: {
                    academic_researcher: "Academic researcher",
                    none: "None",
                    other: "Other",
                    professional: "Professional",
                    student: "Student",
                    teacher: "Teacher"
                },
                computer_use: {
                    easy: "Easy, e.g., computer usage for easy routine tasks like browsing the web or sending and receiving emails",
                    high: "High, e.g., software engineering, adaptation of computer games, programming in languages as Java, SQL, PHP, or PYTHON, or network administration",
                    intermediate: "Intermediate, e.g., text processing, spreadsheet, or database administration",
                    none: "None"
                },
                country: {
                    ac: "Ascension Island",
                    ad: "Andorra",
                    ae: "United Arab Emirates",
                    af: "Afghanistan",
                    ag: "Antigua And Barbuda",
                    ai: "Anguilla",
                    al: "Albania",
                    am: "Armenia",
                    an: "Netherlands Antilles",
                    ao: "Angola",
                    aq: "Antarctica",
                    ar: "Argentina",
                    as: "American Samoa",
                    at: "Austria",
                    au: "Australia",
                    aw: "Aruba",
                    ax: "\xc5land Islands",
                    az: "Azerbaijan",
                    ba: "Bosnia and Herzegovina",
                    bb: "Barbados",
                    bd: "Bangladesh",
                    be: "Belgium",
                    bf: "Burkina Faso",
                    bg: "Bulgaria",
                    bh: "Bahrain",
                    bi: "Burundi",
                    bj: "Benin",
                    bl: "Saint Barth\xe9lemy",
                    bm: "Bermuda",
                    bn: "Brunei Darussalam",
                    bo: "Bolivia",
                    bq: "Caribbean Netherlands",
                    br: "Brazil",
                    bs: "Bahamas",
                    bt: "Bhutan",
                    bv: "Bouvet Island",
                    bw: "Botswana",
                    by: "Belarus",
                    bz: "Belize",
                    ca: "Canada",
                    cc: "Cocos [Keeling] Islands",
                    cd: "Congo, Democratic Republic of the",
                    cf: "Central African Republic",
                    cg: "Congo",
                    ch: "Switzerland",
                    ci: "C\xf4te d'Ivoire",
                    ck: "Cook Islands",
                    cl: "Chile",
                    cm: "Cameroon",
                    cn: "China",
                    co: "Colombia",
                    cr: "Costa Rica",
                    cu: "Cuba",
                    cv: "Cape Verde",
                    cw: "Cura\xe7ao",
                    cx: "Christmas Island",
                    cy: "Cyprus",
                    cz: "Czech Republic",
                    de: "Germany",
                    dj: "Djibouti",
                    dk: "Denmark",
                    dm: "Dominica",
                    do: "Dominican Republic",
                    dz: "Algeria",
                    ec: "Ecuador",
                    ee: "Estonia",
                    eg: "Egypt",
                    eh: "Western Sahara",
                    er: "Eritrea",
                    es: "Spain",
                    et: "Ethiopia",
                    fi: "Finland",
                    fj: "Fiji",
                    fk: "Falkland Islands",
                    fm: "Micronesia, Federated States of",
                    fo: "Faroe Islands",
                    fr: "France",
                    ga: "Gabon",
                    gb: "United Kingdom",
                    gd: "Grenada",
                    ge: "Georgia",
                    gf: "French Guiana",
                    gg: "Guernsey",
                    gh: "Ghana",
                    gi: "Gibraltar",
                    gl: "Greenland",
                    gm: "Gambia",
                    gn: "Guinea",
                    gp: "Guadeloupe",
                    gq: "Equatorial Guinea",
                    gr: "Greece",
                    gs: "South Georgia and the South Sandwich Islands",
                    gt: "Guatemala",
                    gu: "Guam",
                    gw: "Guinea-Bissau",
                    gy: "Guyana",
                    hk: "Hong Kong SAR China",
                    hm: "Heard Island and McDonald Islands",
                    hn: "Honduras",
                    hr: "Croatia",
                    ht: "Haiti",
                    hu: "Hungary",
                    id: "Indonesia",
                    ie: "Ireland",
                    il: "Israel",
                    im: "Isle of Man",
                    in: "India",
                    io: "British Indian Ocean Territory",
                    iq: "Iraq",
                    ir: "Iran, Islamic Republic of",
                    is: "Iceland",
                    it: "Italy",
                    je: "Jersey",
                    jm: "Jamaica",
                    jo: "Jordan",
                    jp: "Japan",
                    ke: "Kenya",
                    kg: "Kyrgyzstan",
                    kh: "Cambodia",
                    ki: "Kiribati",
                    km: "Comoros",
                    kn: "Saint Kitts and Nevis",
                    kp: "Korea, Democratic People's Republic of",
                    kr: "Korea, Republic of",
                    kw: "Kuwait",
                    ky: "Cayman Islands",
                    kz: "Kazakhstan",
                    la: "Lao People's Democratic Republic",
                    lb: "Lebanon",
                    lc: "Saint Lucia",
                    li: "Liechtenstein",
                    lk: "Sri Lanka",
                    lr: "Liberia",
                    ls: "Lesotho",
                    lt: "Lithuania",
                    lu: "Luxembourg",
                    lv: "Latvia",
                    ly: "Libya",
                    ma: "Morocco",
                    mc: "Monaco",
                    md: "Moldova, Republic of",
                    me: "Montenegro",
                    mf: "Saint Martin",
                    mg: "Madagascar",
                    mh: "Marshall Islands",
                    mk: "North Macedonia",
                    ml: "Mali",
                    mm: "Myanmar",
                    mn: "Mongolia",
                    mo: "Macau SAR China",
                    mp: "Northern Mariana Islands",
                    mq: "Martinique",
                    mr: "Mauritania",
                    ms: "Montserrat",
                    mt: "Malta",
                    mu: "Mauritius",
                    mv: "Maldives",
                    mw: "Malawi",
                    mx: "Mexico",
                    my: "Malaysia",
                    mz: "Mozambique",
                    na: "Namibia",
                    nc: "New Caledonia",
                    ne: "Niger",
                    nf: "Norfolk Island",
                    ng: "Nigeria",
                    ni: "Nicaragua",
                    nl: "Netherlands",
                    no: "Norway",
                    not_set: "Not Set",
                    np: "Nepal",
                    nr: "Nauru",
                    nu: "Niue",
                    nz: "New Zealand",
                    om: "Oman",
                    pa: "Panama",
                    pe: "Peru",
                    pf: "French Polynesia",
                    pg: "Papua New Guinea",
                    ph: "Philippines",
                    pk: "Pakistan",
                    pl: "Poland",
                    pm: "Saint Pierre and Miquelon",
                    pn: "Pitcairn Islands",
                    pr: "Puerto Rico",
                    ps: "Palestinian Territories",
                    pt: "Portugal",
                    pw: "Palau",
                    py: "Paraguay",
                    qa: "Qatar",
                    re: "R\xe9union",
                    ro: "Romania",
                    rs: "Serbia",
                    ru: "Russian Federation",
                    rw: "Rwanda",
                    sa: "Saudi Arabia",
                    sb: "Solomon Islands",
                    sc: "Seychelles",
                    sd: "Sudan",
                    se: "Sweden",
                    sg: "Singapore",
                    sh: "Saint Helena",
                    si: "Slovenia",
                    sj: "Svalbard and Jan Mayen",
                    sk: "Slovakia",
                    sl: "Sierra Leone",
                    sm: "San Marino",
                    sn: "Senegal",
                    so: "Somalia",
                    sr: "Suriname",
                    ss: "South Sudan",
                    st: "Sao Tome And Principe",
                    sv: "El Salvador",
                    sx: "Sint Maarten",
                    sy: "Syrian Arab Republic",
                    sz: "Swaziland",
                    tc: "Turks and Caicos Islands",
                    td: "Chad",
                    tf: "French Southern Territories",
                    tg: "Togo",
                    th: "Thailand",
                    tj: "Tajikistan",
                    tk: "Tokelau",
                    tl: "Timor-Leste",
                    tm: "Turkmenistan",
                    tn: "Tunisia",
                    to: "Tonga",
                    tr: "T\xfcrkiye",
                    tt: "Trinidad and Tobago",
                    tv: "Tuvalu",
                    tw: "Taiwan",
                    tz: "Tanzania, United Republic of",
                    ua: "Ukraine",
                    ug: "Uganda",
                    um: "U.S. Minor Outlying Islands",
                    us: "United States of America",
                    uy: "Uruguay",
                    uz: "Uzbekistan",
                    va: "Vatican City",
                    vc: "Saint Vincent and the Grenadines",
                    ve: "Venezuela",
                    vg: "British Virgin Islands",
                    vi: "U.S. Virgin Islands",
                    vn: "Viet Nam",
                    vu: "Vanuatu",
                    wf: "Wallis and Futuna",
                    ws: "Samoa",
                    ye: "Yemen",
                    yt: "Mayotte",
                    za: "South Africa",
                    zm: "Zambia",
                    zw: "Zimbabwe",
                    zz: "Unknown or Invalid Region"
                },
                course_features: {
                    animations: "Animations",
                    audio: "Audio lectures",
                    collab_spaces: "Collaboration spaces",
                    discussions: "Live discussions",
                    exercises: "Exercises and case studies",
                    infographics: "Infographics and other graphics",
                    quizzes: "Quizzes",
                    self_assessments: "Self-assessments",
                    slides: "Power point presentations",
                    text: "Plain text",
                    video: "Video lectures"
                },
                gender: {
                    female: "Female",
                    male: "Male",
                    not_set: "Not set",
                    other: "Other"
                },
                highest_degree: {
                    bachelor: "Bachelor",
                    diplom: "Diplom",
                    high_student: "High school",
                    magister: "Magister",
                    master: "Master",
                    none: "None",
                    other: "Other",
                    phd: "PhD"
                },
                motivation: {
                    credits: "To earn credits for my studies / apprenticeship",
                    none: "None",
                    other: "Other",
                    personal: "Personal interest - free-time activity",
                    professional: "Professional interest - further training"
                },
                occupation: {
                    ac: "Ascension Island",
                    ad: "Andorra",
                    ae: "United Arab Emirates",
                    af: "Afghanistan",
                    ag: "Antigua And Barbuda",
                    ai: "Anguilla",
                    al: "Albania",
                    am: "Armenia",
                    an: "Netherlands Antilles",
                    ao: "Angola",
                    aq: "Antarctica",
                    ar: "Argentina",
                    as: "American Samoa",
                    at: "Austria",
                    au: "Australia",
                    aw: "Aruba",
                    ax: "\xc5land Islands",
                    az: "Azerbaijan",
                    ba: "Bosnia and Herzegovina",
                    bb: "Barbados",
                    bd: "Bangladesh",
                    be: "Belgium",
                    bf: "Burkina Faso",
                    bg: "Bulgaria",
                    bh: "Bahrain",
                    bi: "Burundi",
                    bj: "Benin",
                    bl: "Saint Barth\xe9lemy",
                    bm: "Bermuda",
                    bn: "Brunei Darussalam",
                    bo: "Bolivia",
                    bq: "Caribbean Netherlands",
                    br: "Brazil",
                    bs: "Bahamas",
                    bt: "Bhutan",
                    bv: "Bouvet Island",
                    bw: "Botswana",
                    by: "Belarus",
                    bz: "Belize",
                    ca: "Canada",
                    cc: "Cocos [Keeling] Islands",
                    cd: "Congo, Democratic Republic of the",
                    cf: "Central African Republic",
                    cg: "Congo",
                    ch: "Switzerland",
                    ci: "C\xf4te d'Ivoire",
                    ck: "Cook Islands",
                    cl: "Chile",
                    cm: "Cameroon",
                    cn: "China",
                    co: "Colombia",
                    cr: "Costa Rica",
                    cu: "Cuba",
                    cv: "Cape Verde",
                    cw: "Cura\xe7ao",
                    cx: "Christmas Island",
                    cy: "Cyprus",
                    cz: "Czech Republic",
                    de: "Germany",
                    dj: "Djibouti",
                    dk: "Denmark",
                    dm: "Dominica",
                    do: "Dominican Republic",
                    dz: "Algeria",
                    ec: "Ecuador",
                    ee: "Estonia",
                    eg: "Egypt",
                    eh: "Western Sahara",
                    er: "Eritrea",
                    es: "Spain",
                    et: "Ethiopia",
                    fi: "Finland",
                    fj: "Fiji",
                    fk: "Falkland Islands",
                    fm: "Micronesia, Federated States of",
                    fo: "Faroe Islands",
                    fr: "France",
                    ga: "Gabon",
                    gb: "United Kingdom",
                    gd: "Grenada",
                    ge: "Georgia",
                    gf: "French Guiana",
                    gg: "Guernsey",
                    gh: "Ghana",
                    gi: "Gibraltar",
                    gl: "Greenland",
                    gm: "Gambia",
                    gn: "Guinea",
                    gp: "Guadeloupe",
                    gq: "Equatorial Guinea",
                    gr: "Greece",
                    gs: "South Georgia and the South Sandwich Islands",
                    gt: "Guatemala",
                    gu: "Guam",
                    gw: "Guinea-Bissau",
                    gy: "Guyana",
                    hk: "Hong Kong SAR China",
                    hm: "Heard Island and McDonald Islands",
                    hn: "Honduras",
                    hr: "Croatia",
                    ht: "Haiti",
                    hu: "Hungary",
                    id: "Indonesia",
                    ie: "Ireland",
                    il: "Israel",
                    im: "Isle of Man",
                    in: "India",
                    io: "British Indian Ocean Territory",
                    iq: "Iraq",
                    ir: "Iran, Islamic Republic of",
                    is: "Iceland",
                    it: "Italy",
                    je: "Jersey",
                    jm: "Jamaica",
                    jo: "Jordan",
                    jp: "Japan",
                    ke: "Kenya",
                    kg: "Kyrgyzstan",
                    kh: "Cambodia",
                    ki: "Kiribati",
                    km: "Comoros",
                    kn: "Saint Kitts and Nevis",
                    kp: "Korea, Democratic People's Republic of",
                    kr: "Korea, Republic of",
                    kw: "Kuwait",
                    ky: "Cayman Islands",
                    kz: "Kazakhstan",
                    la: "Lao People's Democratic Republic",
                    lb: "Lebanon",
                    lc: "Saint Lucia",
                    li: "Liechtenstein",
                    lk: "Sri Lanka",
                    lr: "Liberia",
                    ls: "Lesotho",
                    lt: "Lithuania",
                    lu: "Luxembourg",
                    lv: "Latvia",
                    ly: "Libya",
                    ma: "Morocco",
                    mc: "Monaco",
                    md: "Moldova, Republic of",
                    me: "Montenegro",
                    mf: "Saint Martin",
                    mg: "Madagascar",
                    mh: "Marshall Islands",
                    mk: "North Macedonia",
                    ml: "Mali",
                    mm: "Myanmar",
                    mn: "Mongolia",
                    mo: "Macau SAR China",
                    mp: "Northern Mariana Islands",
                    mq: "Martinique",
                    mr: "Mauritania",
                    ms: "Montserrat",
                    mt: "Malta",
                    mu: "Mauritius",
                    mv: "Maldives",
                    mw: "Malawi",
                    mx: "Mexico",
                    my: "Malaysia",
                    mz: "Mozambique",
                    na: "Namibia",
                    nc: "New Caledonia",
                    ne: "Niger",
                    nf: "Norfolk Island",
                    ng: "Nigeria",
                    ni: "Nicaragua",
                    nl: "Netherlands",
                    no: "Norway",
                    not_set: "Not Set",
                    np: "Nepal",
                    nr: "Nauru",
                    nu: "Niue",
                    nz: "New Zealand",
                    om: "Oman",
                    pa: "Panama",
                    pe: "Peru",
                    pf: "French Polynesia",
                    pg: "Papua New Guinea",
                    ph: "Philippines",
                    pk: "Pakistan",
                    pl: "Poland",
                    pm: "Saint Pierre and Miquelon",
                    pn: "Pitcairn Islands",
                    pr: "Puerto Rico",
                    ps: "Palestinian Territories",
                    pt: "Portugal",
                    pw: "Palau",
                    py: "Paraguay",
                    qa: "Qatar",
                    re: "R\xe9union",
                    ro: "Romania",
                    rs: "Serbia",
                    ru: "Russian Federation",
                    rw: "Rwanda",
                    sa: "Saudi Arabia",
                    sb: "Solomon Islands",
                    sc: "Seychelles",
                    sd: "Sudan",
                    se: "Sweden",
                    sg: "Singapore",
                    sh: "Saint Helena",
                    si: "Slovenia",
                    sj: "Svalbard and Jan Mayen",
                    sk: "Slovakia",
                    sl: "Sierra Leone",
                    sm: "San Marino",
                    sn: "Senegal",
                    so: "Somalia",
                    sr: "Suriname",
                    ss: "South Sudan",
                    st: "Sao Tome And Principe",
                    sv: "El Salvador",
                    sx: "Sint Maarten",
                    sy: "Syrian Arab Republic",
                    sz: "Swaziland",
                    tc: "Turks and Caicos Islands",
                    td: "Chad",
                    tf: "French Southern Territories",
                    tg: "Togo",
                    th: "Thailand",
                    tj: "Tajikistan",
                    tk: "Tokelau",
                    tl: "Timor-Leste",
                    tm: "Turkmenistan",
                    tn: "Tunisia",
                    to: "Tonga",
                    tr: "T\xfcrkiye",
                    tt: "Trinidad and Tobago",
                    tv: "Tuvalu",
                    tw: "Taiwan",
                    tz: "Tanzania, United Republic of",
                    ua: "Ukraine",
                    ug: "Uganda",
                    um: "U.S. Minor Outlying Islands",
                    us: "United States of America",
                    uy: "Uruguay",
                    uz: "Uzbekistan",
                    va: "Vatican City",
                    vc: "Saint Vincent and the Grenadines",
                    ve: "Venezuela",
                    vg: "British Virgin Islands",
                    vi: "U.S. Virgin Islands",
                    vn: "Viet Nam",
                    vu: "Vanuatu",
                    wf: "Wallis and Futuna",
                    ws: "Samoa",
                    ye: "Yemen",
                    yt: "Mayotte",
                    za: "South Africa",
                    zm: "Zambia",
                    zw: "Zimbabwe",
                    zz: "Unknown or Invalid Region"
                },
                pointer_to_openwho: {
                    friends: "From friends/colleagues/events",
                    not_set: "Not set",
                    organisation: "Recommended by your organization or network",
                    other: "Other",
                    print_media: "Print media",
                    social_media: "Social media",
                    web_search: "Web search",
                    who_website: "WHO website"
                },
                position: {
                    department_head: "Department head",
                    intern: "Intern",
                    none: "None",
                    project_manager: "Project manager",
                    team_leader: "Team leader",
                    technician: "Technician"
                },
                primary_language: {
                    aa: "Afar",
                    ab: "Abkhazian",
                    ae: "Avestan",
                    af: "Afrikaans",
                    ak: "Akan",
                    am: "Amharic",
                    an: "Aragonese",
                    ar: "Arabic",
                    as: "Assamese",
                    av: "Avaric",
                    ay: "Aymara",
                    az: "Azerbaijani",
                    ba: "Bashkir",
                    be: "Belarusian",
                    bg: "Bulgarian",
                    bh: "Bihari languages",
                    bi: "Bislama",
                    bm: "Bambara",
                    bn: "Bengali",
                    bo: "Tibetan",
                    br: "Breton",
                    bs: "Bosnian",
                    ca: "Catalan; Valencian",
                    ce: "Chechen",
                    ch: "Chamorro",
                    co: "Corsican",
                    cr: "Cree",
                    cs: "Czech",
                    cu: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
                    cv: "Chuvash",
                    cy: "Welsh",
                    da: "Danish",
                    de: "German",
                    dv: "Divehi; Dhivehi; Maldivian",
                    dz: "Dzongkha",
                    ee: "Ewe",
                    el: "Greek",
                    en: "English",
                    eo: "Esperanto",
                    es: "Spanish",
                    et: "Estonian",
                    eu: "Basque",
                    fa: "Persian",
                    ff: "Fulah",
                    fi: "Finnish",
                    fj: "Fijian",
                    fo: "Faroese",
                    fr: "French",
                    fy: "Western Frisian",
                    ga: "Irish",
                    gd: "Gaelic; Scottish Gaelic",
                    gl: "Galician",
                    gn: "Guarani",
                    gu: "Gujarati",
                    gv: "Manx",
                    ha: "Hausa",
                    he: "Hebrew",
                    hi: "Hindi",
                    ho: "Hiri Motu",
                    hr: "Croatian",
                    ht: "Haitian; Haitian Creole",
                    hu: "Hungarian",
                    hy: "Armenian",
                    hz: "Herero",
                    ia: "Interlingua (International Auxiliary Language Association)",
                    id: "Indonesian",
                    ie: "Interlingue; Occidental",
                    ig: "Igbo",
                    ii: "Sichuan Yi; Nuosu",
                    ik: "Inupiaq",
                    io: "Ido",
                    is: "Icelandic",
                    it: "Italian",
                    iu: "Inuktitut",
                    ja: "Japanese",
                    jv: "Javanese",
                    ka: "Georgian",
                    kg: "Kongo",
                    ki: "Kikuyu; Gikuyu",
                    kj: "Kuanyama; Kwanyama",
                    kk: "Kazakh",
                    kl: "Kalaallisut; Greenlandic",
                    km: "Central Khmer",
                    kn: "Kannada",
                    ko: "Korean",
                    kr: "Kanuri",
                    ks: "Kashmiri",
                    ku: "Kurdish",
                    kv: "Komi",
                    kw: "Cornish",
                    ky: "Kirghiz; Kyrgyz",
                    la: "Latin",
                    lb: "Luxembourgish; Letzeburgesch",
                    lg: "Ganda",
                    li: "Limburgan; Limburger; Limburgish",
                    ln: "Lingala",
                    lo: "Lao",
                    lt: "Lithuanian",
                    lu: "Luba-Katanga",
                    lv: "Latvian",
                    mg: "Malagasy",
                    mh: "Marshallese",
                    mi: "Maori",
                    mk: "Macedonian",
                    ml: "Malayalam",
                    mn: "Mongolian",
                    mr: "Marathi",
                    ms: "Malay",
                    mt: "Maltese",
                    my: "Burmese",
                    na: "Nauru",
                    nb: "Bokm\xe5l, Norwegian; Norwegian Bokm\xe5l",
                    nd: "Ndebele, North; North Ndebele",
                    ne: "Nepali",
                    ng: "Ndonga",
                    nl: "Dutch; Flemish",
                    nn: "Norwegian Nynorsk; Nynorsk, Norwegian",
                    no: "Norwegian",
                    not_set: "Not set",
                    nr: "Ndebele, South; South Ndebele",
                    nv: "Navajo; Navaho",
                    ny: "Chichewa; Chewa; Nyanja",
                    oc: "Occitan (post 1500); Proven\xe7al",
                    oj: "Ojibwa",
                    om: "Oromo",
                    or: "Oriya",
                    os: "Ossetian; Ossetic",
                    pa: "Panjabi; Punjabi",
                    pi: "Pali",
                    pl: "Polish",
                    ps: "Pushto; Pashto",
                    pt: "Portuguese",
                    qu: "Quechua",
                    rm: "Romansh",
                    rn: "Rundi",
                    ro: "Romanian; Moldavian; Moldovan",
                    ru: "Russian",
                    rw: "Kinyarwanda",
                    sa: "Sanskrit",
                    sc: "Sardinian",
                    sd: "Sindhi",
                    se: "Northern Sami",
                    sg: "Sango",
                    si: "Sinhala; Sinhalese",
                    sk: "Slovak",
                    sl: "Slovenian",
                    sm: "Samoan",
                    sn: "Shona",
                    so: "Somali",
                    sq: "Albanian",
                    sr: "Serbian",
                    ss: "Swati",
                    st: "Sotho, Southern",
                    su: "Sundanese",
                    sv: "Swedish",
                    sw: "Swahili",
                    ta: "Tamil",
                    te: "Telugu",
                    tg: "Tajik",
                    th: "Thai",
                    ti: "Tigrinya",
                    tk: "Turkmen",
                    tl: "Tagalog",
                    tn: "Tswana",
                    to: "Tonga (Tonga Islands)",
                    tr: "Turkish",
                    ts: "Tsonga",
                    tt: "Tatar",
                    tw: "Twi",
                    ty: "Tahitian",
                    ug: "Uighur; Uyghur",
                    uk: "Ukrainian",
                    ur: "Urdu",
                    uz: "Uzbek",
                    ve: "Venda",
                    vi: "Vietnamese",
                    vo: "Volap\xfck",
                    wa: "Walloon",
                    wo: "Wolof",
                    xh: "Xhosa",
                    yi: "Yiddish",
                    yo: "Yoruba",
                    za: "Zhuang; Chuang",
                    zh: "Chinese",
                    zu: "Zulu"
                },
                professional_life: {
                    more_than_10_years: "More than 10 years",
                    none: "None",
                    up_to_10_years: "Up to 10 years",
                    up_to_5_years: "Up to 5 years"
                },
                subscribed_to_newsletter: {
                    false: "No",
                    true: "Yes"
                },
                taken_courses: {
                    no: "No",
                    not_set: "Not set",
                    yes_currently: "Yes, currently enrolled",
                    yes_previously: "Yes, previously enrolled"
                },
                why_interested: {
                    carreer: "Career/professional training",
                    certification: "Certification",
                    education: "Further education/development",
                    free_time: "Something to do in the free time/general interest",
                    mandated_learning: "As part of mandated learning programme",
                    not_set: "Not set",
                    other: "Other"
                },
                worked_in_outbreak: {
                    no: "No",
                    not_set: "Not set",
                    yes: "Yes"
                }
            },
            show_birthdate_on_record: "You can decide in your <a href='%{url}'>preferences</a> if you want your certificates to show your date of birth.",
            taken_courses: "Have you taken other online courses in the past 6 months?",
            unconfirmed_mail_cancel_request: "Cancel",
            unconfirmed_mail_resend: "Resend confirmation mail",
            unconfirmed_mails_present: "You requested to change your e-mail. Please confirm the new mail by following the instructions in the confirmation mail that was send to you.",
            why_interested: "Why are you interested in participating in OpenWHO courses?",
            worked_in_outbreak: "Have you worked in a disease outbreak, epidemic or health emergency in the past year?"
        },
        running: "Running",
        self_paced: "Self paced",
        sidebar: {
            dates: "Next dates per course"
        },
        started: "Started",
        starting_soon: "Starting soon",
        upcoming: "Upcoming"
    },
    date: {
        abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        formats: {
            certificate: "%B %-d, %Y",
            default: "%Y-%m-%d",
            informal: "%B %-d",
            long: "%B %d, %Y %H:%M",
            short: "%b %d, %Y"
        },
        month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        order: ["year", "month", "day"],
        timezone: "(UTC)"
    },
    datetime: {
        distance_in_words: {
            about_x_hours: {
                one: "about 1 hour",
                other: "about %{count} hours"
            },
            about_x_months: {
                one: "about 1 month",
                other: "about %{count} months"
            },
            about_x_years: {
                one: "about 1 year",
                other: "about %{count} years"
            },
            almost_x_years: {
                one: "almost 1 year",
                other: "almost %{count} years"
            },
            half_a_minute: "half a minute",
            less_than_x_minutes: {
                one: "less than a minute",
                other: "less than %{count} minutes"
            },
            less_than_x_seconds: {
                one: "less than 1 second",
                other: "less than %{count} seconds"
            },
            over_x_years: {
                one: "over 1 year",
                other: "over %{count} years"
            },
            x_days: {
                one: "1 day",
                other: "%{count} days"
            },
            x_minutes: {
                one: "1 minute",
                other: "%{count} minutes"
            },
            x_months: {
                one: "1 month",
                other: "%{count} months"
            },
            x_seconds: {
                one: "1 second",
                other: "%{count} seconds"
            },
            x_years: {
                one: "1 year",
                other: "%{count} years"
            }
        },
        prompts: {
            day: "Day",
            hour: "Hour",
            minute: "Minute",
            month: "Month",
            second: "Second",
            year: "Year"
        }
    },
    default_title: "MOOCs - start to enjoy learning now",
    errors: {
        attributes: {
            email: {
                already_taken: "The e-mail address you entered has already been registered."
            },
            end_at: {
                before_start_date: "The end date must be after the start date."
            },
            id: {
                invalid_format: "Invalid format for the provided ID.",
                not_unique: "The ID must be unique."
            },
            password: {
                below_minimum_length: "The password must have a minimum length of 8 characters.",
                maximum_length_reached: "The password length must not exceed 72 characters.",
                password_contains_email: "Your e-mail address must not be part of the password."
            },
            title: {
                invalid_format: "Invalid format for the provided ID.",
                not_unique: "The ID must be unique."
            }
        },
        csrf_error: {
            headline: "Invalid or missing CSRF token",
            message: "Did you change your account between opening and submitting this form?"
        },
        error_id: "Error Code",
        format: "%{attribute} %{message}",
        go_to_helpdesk: "Go to helpdesk",
        messages: {
            accepted: "must be accepted",
            announcement: {
                base: {
                    translation_title_text: "Both the title and text are required for translations."
                }
            },
            announcement_email: {
                recipients: {
                    invalid: "At least one of the provided recipients is invalid. Please adhere to the described schema."
                }
            },
            blank: "can't be blank",
            channel: {
                info_link_label: {
                    required: "Please provide a label for the corresponding info link URL."
                }
            },
            confirmation: "doesn't match %{attribute}",
            course: {
                classifiers: {
                    invalid_format: "One of the course tags does not fulfill the format requirements. Allowed characters for tag IDs: a-z, A-Z, 0-9, -, whitespace."
                }
            },
            email: "is not a valid email address",
            empty: "can't be empty",
            equal_to: "must be equal to %{count}",
            even: "must be even",
            exclusion: "is reserved",
            greater_than: "must be greater than %{count}",
            greater_than_or_equal_to: "must be greater than or equal to %{count}",
            inclusion: "is not included in the list",
            invalid: "is invalid",
            item: {
                base: {
                    could_not_be_created: "The item could not be created for some reason. Please try again.",
                    section_required: "The item must be created for a section."
                },
                exercise_type: {
                    required_when_quiz: "You must choose an exercise type for quiz items."
                },
                max_points: {
                    invalid_format: "Points must be positive."
                },
                submission_deadline: {
                    required_when_proctored: "You must provide a submission deadline for proctored items."
                },
                title: {
                    "can't be blank": "The item title must not be blank."
                }
            },
            less_than: "must be less than %{count}",
            less_than_or_equal_to: "must be less than or equal to %{count}",
            model_invalid: "Validation failed: %{errors}",
            no_uri: "No valid URI",
            no_url: "No valid URL",
            no_uuid: "No valid UUID string",
            not_a_number: "is not a number",
            not_an_integer: "must be an integer",
            odd: "must be odd",
            other_than: "must be other than %{count}",
            present: "must be blank",
            required: "must exist",
            rtfile_error: "Your file upload could not be stored.",
            rtfile_exists: "Your file upload could not be stored.",
            rtfile_rejected: "Your file upload has been rejected due to policy violations.",
            rtfile_unconfigured: "Your file upload could not be stored.",
            rtfile_unknown_ref: "Referencing unknown files is not allowed.",
            single_line_string: "Multiline strings are now allowed.",
            taken: "has already been taken",
            too_long: {
                one: "is too long (maximum is 1 character)",
                other: "is too long (maximum is %{count} characters)"
            },
            too_short: {
                one: "is too short (minimum is 1 character)",
                other: "is too short (minimum is %{count} characters)"
            },
            topic: {
                base: {
                    not_created: "The topic could not be created. Please try again."
                }
            },
            upload_error: "Your file upload could not be stored.",
            upload_rejected: "Your file upload has been rejected due to policy violations.",
            url: "is not a valid URL",
            wrong_length: {
                one: "is the wrong length (should be 1 character)",
                other: "is the wrong length (should be %{count} characters)"
            }
        },
        not_found: {
            headline: "We are sorry, but the page you are looking for could not be found (404)",
            message: "Please check the URL. If you really think this is a bug, feel free to contact our support team through the helpdesk."
        },
        server: {
            headline: "We are afraid something went wrong",
            message: "You might want to try again later. This error will be reported to our tech team automatically. However you might want to help us by submitting some details about what went wrong through the helpdesk."
        },
        template: {
            body: "There were problems with the following fields:",
            header: {
                one: "1 error prohibited this %{model} from being saved",
                other: "%{count} errors prohibited this %{model} from being saved"
            }
        },
        trace_hint: "You can help us help you by supplying the following information.",
        trace_id: "Trace ID"
    },
    feeds: {
        course_feed_name: "Available Courses",
        headline: "Our Feeds:",
        txt: "These are our available feeds. All are provided in JSON."
    },
    flash: {
        actions: {
            create: {
                notice: "%{resource_name} was successfully created."
            },
            destroy: {
                alert: "%{resource_name} could not be destroyed.",
                notice: "%{resource_name} was successfully destroyed."
            },
            update: {
                notice: "%{resource_name} was successfully updated."
            }
        },
        error: {
            account_not_confirmed_manually: "The account could not be confirmed manually.",
            associated_user_not_found: "The user to be promoted could not be found.",
            attachment_not_uploaded: "Your attachment could not be uploaded, please try again.",
            audio_not_uploaded: "Your audio file could not be uploaded, please try again.",
            auth_delete_failed: "Could not disconnect the login from your account.",
            blocked_by_country: "This website is not available in your country.",
            certificate_not_updated: "The Record of Achievement has not been updated.",
            certificate_template_has_records: "Can't delete the template due to already existing records.",
            certificate_template_not_created: "The template has not been created.",
            certificate_template_not_deleted: "The template could not be deleted.",
            certificate_template_not_updated: "The template has not been updated.",
            certificate_template_not_uploaded: "The template file has not been uploaded.",
            channel_not_created: "The channel was not created.",
            channel_not_updated: "The channel was not updated.",
            channel_order_failed: "Something went wrong. The order of the channels may not have been updated correctly. Please check the result.",
            classifier_not_created: "The tag was not created.",
            classifier_not_deleted: "The tag was not deleted.",
            classifier_not_updated: "The tag was not updated.",
            classifiers_order_failed: "Something went wrong. The order of the tags may not have been updated correctly. Please check the result.",
            cluster_not_updated: "The category was not updated.",
            confirmation_failed_already_confirmed: "This mail address is already confirmed.",
            confirmation_failed_no_email: "This e-mail address was not found.",
            content_type_not_supported_options: "Open mode and featured are not supported options for the selected content type.",
            could_not_refresh_downloads: "A valid download link could not be requested from the video provider. Please try again later.",
            course_not_created: "The course was not created.",
            course_not_deleted: "The course could not be deleted.",
            course_not_updated: "The course was not updated.",
            course_restricted: "You do not have sufficient permissions to access this course. Please contact the helpdesk if you have questions and need support.",
            courses_order_failed: "Something went wrong. The order of the courses may not have been updated correctly. Please check the result.",
            description_not_saved: "Your description has not been saved successfully.",
            document: {
                title_already_taken: "The given title is already in use."
            },
            document_denied: "You are not qualified for this document.",
            email_hash_invalid: "The provided link seems to be invalid.",
            email_not_updated: "The e-mail address could not be saved. Please enter a valid e-mail address.",
            enterprise_login_already_assigned: "The email address of the Enterprise Login you want to use with this account has already been used for another %{site_name} account. If you want to use the Enterprise Login for this account, please delete the other account.",
            files: {
                attachment_file_size_exceeded: "This file exceeds the allowed file size of {{maxFilesize}} MB.",
                document: {
                    invalid_mime_type: "{{fileext}} is not a valid document file. Allowed document types are %{allowed}.",
                    valid_formats: "Allowed document types are pdf, xml, txt, jpg, png and gif. Max. size: 8 MB."
                },
                file_missing: "The file was not found."
            },
            fudge_points_failed: "The grading could not be updated.",
            generic: "Something broke while we tried to log you in. Please try again later or contact the help desk.",
            invalid_credentials: "Login failed. Please check your credentials.",
            invalid_digest: "Your login failed due to an internal error. Please <a href='%{url}' class='btn btn-default btn-xs'>reset your password</a> for security reasons and try to log in again.",
            invalid_information: "The login with your identity provider has failed due to an information exchange error. Please refer to our helpdesk.",
            live_event_not_created: "The Live Event has not been created.",
            live_event_not_deleted: "The Live Event has not been deleted.",
            live_event_not_updated: "The Live Event has not been updated.",
            login_before_enrollment: "Please log in before enrolling to lectures.",
            login_before_posting: "Please log in before posting a question.",
            login_connect_auth_failed: "An error occurred when trying to connect your account with your social/enterprise login. Please contact our helpdesk.",
            login_failed: "Login failed.",
            login_to_proceed: "Please log in to proceed.",
            lti_provider_not_created: "The LTI provider has not been created.",
            lti_provider_not_deleted: "The LTI provider has not been deleted.",
            lti_provider_not_updated: "The LTI provider has not been saved.",
            missing_user_id_for_enrollment: "Missing user ID. Please select a user before enrolling.",
            need_to_be_admin: "You need to be an admin of this group to do this.",
            need_to_be_member: "You need to be a member of the group to do this.",
            not_authorized: "You do not have sufficient permissions for this action.",
            not_enrolled: "You are not enrolled for this course.",
            objective_not_created: "The objective has not been created.",
            objective_not_deleted: "The objective has not been deleted.",
            objective_not_updated: "The objective has not been updated.",
            open_badge_template_not_created: "The Open Badge template has not been created.",
            open_badge_template_not_deleted: "Can't delete the Open Badge template due to already existing badges.",
            open_badge_template_not_updated: "The Open Badge template has not been updated.",
            open_badge_template_not_uploaded: "The Open Badge template file has not been uploaded.",
            params_missing_learn_review: "Params for quiz_id and course_id are missing!",
            password_change_failed: {
                different_passwords: 'Please make sure that "New password" and the "Password confirmation" are identical.',
                forgot_password: "Did you forget your password? <a href='/account/reset/new' class='btn btn-default btn-xs'>Request a password reset</a>",
                password_save_failed: "Saving your new password failed. Please try again later."
            },
            picture_not_uploaded: "Your picture could not be uploaded, please try again.",
            pinboard: {
                cannot_edit_question: "You cannot edit this question!"
            },
            poll_not_created: "The poll has not been created.",
            poll_not_deleted: "The poll has not been deleted.",
            poll_not_updated: "The poll has not been updated.",
            proctoring: {
                already_proctored: "You already booked a Certificate.",
                booking_failed: "You cannot book a Certificate for this course.",
                not_enrolled: "You need to enroll to the course to book a Certificate.",
                submission_exclude_failed: "Submission exclusion failed."
            },
            provider_auth_error: "No valid authentication has been found for %{provider_name}.",
            qcrule_update_error: "The QC rule could not be updated.",
            quiz_attempt_failed: "An additional attempt for the quiz could not be granted.",
            quiz_submission_failed: "Your quiz solution has not been submitted correctly.",
            quiz_submission_no_answers: "No answers were submitted for your quiz solution.",
            quiz_submission_proctoring_unavailable: "The proctored exam could not be started. Please try again later.",
            quiz_submission_time_up: "The time for your active quiz is up.",
            quiz_submissions_maximum_reached: "The maximum of allowed attempts for this quiz is already reached.",
            quiz_submissions_submission_deadline_passed: "The deadline for this quiz has passed.",
            reactivate_course: "The course reactivation has failed. Please try again or contact the helpdesk if the problem persists.",
            reactivation: {
                already_reactivated: "You have already reactivated this course.",
                not_available: "Reactivation is not available for this course at this time."
            },
            reading_material_not_uploaded: "Your reading material file could not be uploaded, please try again.",
            recalculation_failed: "The recalculation of learners' progresses for this course could not be started. Please try again later.",
            recalculation_rejected: "The recalculation of learners' progresses for this course has been recently triggered. Please try again later.",
            section_not_created: "The section has not been created.",
            section_not_updated: "The section has not been updated.",
            session_expired: "Your session has expired. Please log in again.",
            single_video_sync_trigger_failed: "The sync could not be triggered.",
            slide_extraction_trigger_failed: "The video slide extraction could not be triggered.",
            slides_not_uploaded: "Your slides could not be uploaded, please try again.",
            subtitles_not_valid: "The subtitles must be a ZIP archive or VTT file.",
            switch_question_to_mcq: "Single Select Questions should only have 1 correct answer! Please review the question.",
            teacher_required: "You require teacher or admin privileges to do this.",
            thumbnail_archive_not_uploaded: "Your metadata archive could not be uploaded, please try again.",
            transcript_not_uploaded: "Your transcript file could not be uploaded, please try again.",
            unconfirmed_user: "This e-mail address has not been confirmed yet. Please check your inbox for an e-mail received after the registration process. All further steps can be found there. If you have not received the mail click <a href='%{url}' class='btn btn-default btn-xs'>here</a> to send it again.",
            unenrollment_failed: "The unenrollment failed. Please try again.",
            unfulfilled_prerequisites: "You have not yet fulfilled the prerequisites for participation in this course.",
            user_required: "No user given.",
            user_test_not_created: "The user test could not be created.",
            user_test_not_deleted: "The user test could not be deleted.",
            user_test_not_updated: "The user test could not be updated.",
            users: {
                not_found: "The user could not be found."
            },
            video_not_updated: "The video was not updated.",
            voucher: {
                already_claimed: "The voucher code you have supplied was already used. Codes can only be applied once.",
                expired: "The voucher code you have supplied is already expired.",
                general: "A general error has occurred. Please contact the helpdesk if this problem persists.",
                incorrect_product: "The voucher code you have supplied is not valid for this product.",
                not_found: "The voucher code you have supplied is not valid. Please check your code.",
                wrong_claimant: "The voucher code you have supplied is not valid for your user account.",
                wrong_course: "The voucher code you have supplied is not valid for this course."
            }
        },
        notice: {
            auth_deleted: "The login has been disconnected from your account.",
            channel_deleted: "The channel has been deleted.",
            confirmation_email_required: "We sent you a confirmation e-mail to %{email}. Please follow the instructions in order to activate your new e-mail address.",
            confirmation_resend: "We re-sent you a confirmation e-mail.",
            course_deleted: "The course has been deleted.",
            course_not_published: "There is no public course content yet.",
            enrollment_already_present: "You are already enrolled to this course.",
            enrollment_successful: "Welcome.<br />You have been enrolled successfully to %{course}. Enjoy this course.",
            enrollment_successful_short: "You have been enrolled successfully.",
            file_deleted: "The file was deleted.",
            login_connect_auth: "Please login to your existing %{brand} account to connect it with your %{provider} login.",
            login_to_enroll: "Please login to enroll to the course: <b>%{course}</b>",
            password_changed: "Your password has been successfully changed.",
            primary_email_suspended: "<b>Your primary e-mail address has been suspended due to delivery issues.</b> Reasons include the e-mail account being deleted or a full mailbox. In your user <a href='/dashboard/profile' class='btn btn-xs btn-default'>profile</a>, you can set a new e-mail address or reactivate the existing one.\n",
            quiz_submission_still_active: "There is still an active quiz running.",
            section_deleted: "The section has been deleted.",
            tag_before_posting: "Please set at least one tag.",
            unenrollment_successful: "You have been unenrolled.<br />Your progress data is archived and will be saved for later re-enrollment.",
            user_deleted: "Your account was deleted as requested.",
            user_deleted_by_admin: "Account was deleted.",
            user_successfully_enrolled: "User has been enrolled successfully.",
            user_successfully_unenrolled: "User has been unenrolled successfully.",
            video_player_browser_choice: "For the full user experience when watching our videos, please use a modern browser capable of playing H.264 videos, i.e. latest versions of Google Chrome, Safari or Firefox (exception: Firefox for Mac does not support H.264 videos)."
        },
        success: {
            account_confirmed_manually: "The account was confirmed manually.",
            announcement_mails_disabled: "Your account %{mail} will not receive any more platform news. You can reactivate this at any time in your profile settings.",
            announcement_saved: "Announcement has successfully been saved!",
            auth_added: "You can login to %{brand} using your %{provider} account from now.",
            cache_flush: "Deleted %{deleted_items} Cache entries",
            certificate_template_created: "The template has been created.",
            certificate_template_deleted: "The template has been deleted.",
            certificate_template_updated: "The template has been updated.",
            channel_created: "The channel has been created.",
            channel_order_updated: "The channel order has been updated.",
            channel_updated: "The channel has been updated.",
            classifier_created: "The tag has been created.",
            classifier_deleted: "The tag has been deleted.",
            classifier_updated: "The tag has been updated.",
            classifiers_order_updated: "The tag order has been updated.",
            cluster_updated: "The category has been updated.",
            confirmation_successful: "Thank you for confirming your e-mail address.",
            course_announcement_mails_disabled: "Your account %{mail} will not receive any more course news. You can reactivate this at any time in your profile settings.",
            course_archived: "The course was successfully marked as completed.",
            course_created: "The course has been created.",
            course_updated: "The course has been updated.",
            courses_order_updated: "The course order has been updated.",
            fudge_points_added: "The grading was updated.",
            global_mails_disabled: "Your account %{mail} will not receive any more notifications via email. You can reactivate this at any time in your profile settings.",
            live_event_created: "The Live Event has been created.",
            live_event_deleted: "The Live Event has been deleted.",
            live_event_updated: "The Live Event has been updated.",
            logged_out: "You successfully logged out.",
            lti_provider_created: "The LTI provider has successfully been created.",
            lti_provider_deleted: "The LTI provider has successfully been deleted.",
            lti_provider_updated: "The LTI provider has successfully been saved.",
            objective_created: "The objective has been created.",
            objective_deleted: "The objective has been deleted.",
            objective_updated: "The objective has been updated.",
            open_badge_template_created: "The Open Badge template has been created.",
            open_badge_template_deleted: "The Open Badge template has been deleted.",
            open_badge_template_updated: "The Open Badge template has been updated.",
            pinboard_mails_disabled: "Your account %{mail} will not receive any more pinboard news. You can reactivate this at any time in your profile settings.",
            poll_created: "The poll has been created.",
            poll_deleted: "The poll has been deleted.",
            poll_updated: "The poll has been updated.",
            primary_email_unsuspended: "Your primary e-mail address has been reactivated successfully.",
            proctoring: {
                already_registered_smowl: "You have already calibrated your image with our partner.",
                certificate_booked: "You successfully booked the Certificate for this course.",
                submission_excluded: "Submission successfully excluded from proctoring."
            },
            qcrule_updated: "The QC rule has been updated.",
            quiz_attempt_added: "The additional attempt for quiz was granted.",
            quiz_submitted: "Your quiz solution has been submitted successfully.",
            reactivate_course: "You have reactivated this course until %{date}",
            recalculation_triggered: "The recalculation of learners' progresses for this course has been started.",
            section_updated: "The section %{section_title} has been updated.",
            single_video_sync_triggered: "The synchronization of a video has been triggered.",
            slide_extraction_triggered: "The video slide extraction has been triggered.",
            submission_converted: "Submission was successfully converted from existing snapshot!",
            sync_initiated: "The synchronization has been initiated.",
            teacher_information_created: "Teacher information has been successfully saved!",
            user_test_created: "The user test has been created.",
            user_test_deleted: "The user test has been deleted.",
            user_test_updated: "The user test has been updated.",
            video_updated: "The video has been updated."
        }
    },
    footer: {
        cookie_consents: {
            accept: "Accept",
            close: "Close",
            decline: "Decline"
        },
        native_apps: {
            apple_store_alt: "Download on the App Store",
            google_play_alt: "Get it on Google Play"
        }
    },
    gamification: {
        badge: {
            level: {
                default: {
                    0: "Bronze",
                    1: "Silver",
                    2: "Gold"
                }
            }
        },
        badges: {
            headline: "Badges"
        },
        courses_scores: {
            course: "Course",
            total: "Total"
        },
        points: "XP",
        scores: {
            communication: "Communication",
            course: "Course",
            empty: "You can gain experience points (XP) by working through learning content and participating in forum discussions.",
            missing_course_title: "(Course not available)",
            selftests: "Self-tests",
            total: "Total",
            your_points: "Your %{points}"
        }
    },
    global: {
        add: "Add",
        are_you_sure: "Are you sure?",
        back: "Back",
        beta: "Beta",
        beta_description: "This new functionality is not yet optimized for all browsers. Please create a helpdesk ticket to inform us about errors, providing details including the browser and browser version you are using. As a workaround, we ask you to try another browser to continue (Chrome or Firefox)",
        cancel: "Cancel",
        close: "Close",
        confirm: "Yes, sure",
        delete: "Delete",
        download: "Download",
        edit: "Edit",
        email: "E-mail",
        email_or_name: "E-Mail oder Name",
        nojs: {
            label: "Please enable Javascript in your browser!!",
            link: "https://turnonjs.com/"
        },
        password: "Password",
        read_less: "Read less",
        read_more: "Read more",
        submit: "Submit",
        toggle_dropdown: "Toggle dropdown"
    },
    grape: {
        errors: {
            format: "%{attributes} %{message}",
            messages: {
                all_or_none: "provide all or none of parameters",
                at_least_one: "are missing, at least one parameter must be provided",
                blank: "is empty",
                coerce: "is invalid",
                empty_message_body: "Empty message body supplied with %{body_format} content-type",
                exactly_one: "are missing, exactly one parameter must be provided",
                except_values: "has a value not allowed",
                incompatible_option_values: "%{option1}: %{value1} is incompatible with %{option2}: %{value2}",
                invalid_accept_header: {
                    problem: "Invalid accept header",
                    resolution: "%{message}"
                },
                invalid_formatter: "cannot convert %{klass} to %{to_format}",
                invalid_message_body: {
                    problem: "message body does not match declared format",
                    resolution: "when specifying %{body_format} as content-type, you must pass valid %{body_format} in the request's 'body' "
                },
                invalid_response: "Invalid response",
                invalid_version_header: {
                    problem: "Invalid version header",
                    resolution: "%{message}"
                },
                invalid_versioner_option: {
                    problem: "Unknown :using for versioner: %{strategy}",
                    resolution: "available strategy for :using is :path, :header, :accept_version_header, :param"
                },
                invalid_with_option_for_represent: {
                    problem: "You must specify an entity class in the :with option.",
                    resolution: "eg: represent User, :with => Entity::User"
                },
                missing_group_type: "group type is required",
                missing_mime_type: {
                    problem: "missing mime type for %{new_format}",
                    resolution: "you can choose existing mime type from Grape::ContentTypes::CONTENT_TYPES or add your own with content_type :%{new_format}, 'application/%{new_format}' "
                },
                missing_option: "You must specify :%{option} options.",
                missing_vendor_option: {
                    problem: "missing :vendor option.",
                    resolution: "eg: version 'v1', using: :header, vendor: 'twitter'",
                    summary: "when version using header, you must specify :vendor option. "
                },
                mutual_exclusion: "are mutually exclusive",
                presence: "is missing",
                regexp: "is invalid",
                same_as: "is not the same as %{parameter}",
                unknown_options: "unknown options: %{options}",
                unknown_parameter: "unknown parameter: %{param}",
                unknown_validator: "unknown validator: %{validator_type}",
                unsupported_group_type: "group type must be Array, Hash, JSON or Array[JSON]",
                values: "does not have a valid value"
            }
        }
    },
    header: {
        login: {
            external: {
                headline: "Or log in with:"
            },
            forgot_password: "Forgot your password?",
            headline: "Login to %{brand}",
            identity: {
                headline: "Log in with credentials",
                label: {
                    email: "global.email",
                    password: "global.password",
                    submit: "Log in"
                },
                placeholder: {
                    email: "global.email",
                    password: "global.password"
                }
            },
            loading: "Loading ...",
            omniauth: {
                saml: "Single Sign-On (SAML)",
                saml_test_id: "SAMLtest ID",
                saml_test_id_notice: "Don\u2019t know how to use SAML Test Single Sign-On? <a href='/pages/faq' target='_blank'>Learn how it works.</a>",
                who: "WHO Identity (WIMS)",
                who_notice: "If you have issues logging in using your WIMS account please create an OpenWHO account."
            },
            register: {
                headline: "New here?",
                link: "Create new account",
                text: "You can %{link}."
            }
        },
        navigation: {
            about: "About",
            account_options: "Account options",
            achievements: "Achievements",
            admin: {
                announcements: "Announcements",
                categories: "Categories",
                certificates: "Certificates",
                channels: "Channels",
                courses: "Courses",
                dashboard: "Dashboard",
                knowledge_documents: "Documents",
                live_events: "Live Briefings",
                lti_providers: "LTI Providers",
                permissions: "Permissions",
                polls: "Polls",
                qcalerts: "QC Alerts",
                qcrules: "QC Rules",
                reports: "Reports",
                teachers: "Teacher",
                user_tests: "User Tests",
                users: "Users",
                videos: "Videos",
                vouchers: "Vouchers"
            },
            administration: "Administration",
            alerts: "Alerts",
            channels: "Channels",
            choose_language: "Choose Language",
            courses: "Courses",
            dashboard: "Dashboard",
            discussions: "Discussions",
            documents: "Certificates",
            greeting: "%{name}",
            home: "Home",
            live_events: "Live Briefings",
            login: "Log in",
            logout: "Log out",
            masquerade: {
                copy_email: "E-Mail to Clipboard",
                copy_user_id: "User ID to Clipboard",
                demasq: "DEMASQ"
            },
            menu: "Menu",
            more: "More",
            my_things: "My %{brand}",
            news: "News",
            points: "Points",
            profile: "Profile",
            profile_menu: "Profile menu",
            register: "Sign up",
            settings: "Settings",
            toggle: "Toggle navigation",
            tooltip: {
                logout: "Log out"
            }
        }
    },
    helpdesk: {
        back: "Back",
        button: "Helpdesk",
        cancel: "Cancel",
        chat: "Support Chat",
        contact: "Contact Form",
        course_specific_question: "Course-specific question",
        email: "Your e-mail address",
        error_message: "Oops something went wrong.",
        general_question: "General question",
        headline: {
            brand: "%{brand} ",
            remainder: "Helpdesk"
        },
        loading_suggestion: "Loading suggestion...",
        notice: "Please write your ticket in English. You can <a href='/pages/faq' target='_blank' rel='noopener'>find our FAQ here</a>.",
        notice_title: "Hint",
        report_title: "Title of your issue",
        submission: "Your Issue",
        submit: "Report issue",
        success_message: "Your request has been sent to our support team, and will be answered as soon as possible.",
        suggestion: "Does this answer your question?",
        technical_question: "Technical question",
        text: "Please describe your technical problem using the textbox below. Information about your browser and your e-mail address will be automatically submitted along with your issue report.",
        thanks: "Thank You!",
        topic: "Category"
    },
    helpers: {
        select: {
            prompt: "Please select"
        },
        submit: {
            announcement: {
                create: "Create announcement",
                update: "Update announcement"
            },
            announcement_email: {
                update: "Send announcement email"
            },
            certificate_template: {
                create: "Create template",
                update: "Update template"
            },
            channel: {
                create: "Add channel",
                update: "Update channel"
            },
            classifier: {
                create: "Create tag",
                submit: "Save course order",
                update: "Update tag"
            },
            cluster: {
                submit: "Save tag order",
                update: "Update category"
            },
            course: {
                create: "Create course",
                update: "Update course"
            },
            course_visual: {
                preview: "Save and show course",
                update: "Save"
            },
            create: "Save",
            login: {
                submit: "Connect account"
            },
            objective: {
                create: "Create Objective",
                update: "Update Objective"
            },
            open_badge_template: {
                create: "Create template",
                update: "Update template"
            },
            poll: {
                create: "Create new poll",
                update: "Update poll"
            },
            submit: "Save %{model}",
            teacher: {
                create: "Save information",
                update: "Save information"
            },
            update: "Save",
            video_provider: {
                create: "Create Provider",
                update: "Update Provider"
            },
            voucher_redemption: {
                create: "Redeem",
                update: "Redeem"
            },
            xikolo_collabspace_membership: {
                create: "Create Membership"
            },
            xikolo_course_item: {
                create: "Create Item",
                preview: "Save and show item",
                update: "Save item"
            },
            xikolo_course_section: {
                create: "Create Section",
                update: "Update Section"
            },
            xikolo_lti_lti_provider: {
                create: "Create Provider",
                update: "Update Provider"
            },
            xikolo_pinboard_answer: {
                create: "Post reply",
                update: "Save changes"
            },
            xikolo_pinboard_question: {
                update: "Update Question"
            },
            xikolo_quiz_answer: {
                create: "Create Answer",
                update: "Update Answer"
            },
            xikolo_quiz_question: {
                create: "Create Question",
                update: "Update Question"
            },
            xikolo_video_video: {
                create: "Create Video",
                update: "Update Video"
            }
        }
    },
    home: {
        accordion: {
            sections: [{
                label: "Browse courses by theme...",
                title: "Browse courses by theme",
                text: "OpenWHO courses are organized by channels addressing more than 20 public health themes \u2013 from antimicrobial resistance, to infection prevention and control, to health emergency response.",
                link_text: "Search courses by thematic channel",
                link_url: "/courses",
                image_url: "startpage/accordion/channels.jpg",
                image_alt: "Man getting vaccinated",
                credits: "Photo credits: WHO / UNICEF / Michael Duff"
            }, {
                label: "Learn in your preferred language...",
                title: "Learn in your preferred language",
                text: "We know it's easier to learn in your native language. <span class='mt15 block'> That's why OpenWHO offers online courses from WHO experts in more than 60 national and local languages, with more to come.</span>",
                link_text: "Search courses by language",
                link_url: "/courses",
                image_url: "startpage/accordion/languages.png",
                image_alt: "List of several languages"
            }, {
                label: "Respond to national health threats...",
                title: "Respond to national health threats",
                text: "Our Serving Countries portal provides easy access to courses in countries' official languages to support their response to health emergencies.<span class='mt15 block'>Each country channel is produced in collaboration with a WHO Country Office, with more countries added each year.</span>",
                link_text: "Visit our Serving Countries portal",
                link_url: "/pages/serving-countries",
                image_url: "startpage/accordion/countries.jpg",
                image_alt: "Woman holding a baby",
                credits: "Photo credits: WHO / Agata Grzybowska"
            }]
        },
        claims: [{
            title: "Learn",
            text: "free of charge,</br> at your own pace</br> and in your own language"
        }, {
            title: "Access",
            text: "low-bandwidth and</br> downloadable materials</br> to follow you off-line"
        }, {
            title: "Discover",
            text: "evidence-based</br> public health learning</br> from WHO experts"
        }],
        courses: "Current and upcoming courses",
        head_hero: {
            action_text: "Browse courses",
            claim: "Explore free online courses with life-saving health knowledge from the World Health Organization."
        },
        intro_text: "OpenWHO is WHO\u2019s interactive, web-based, knowledge-transfer platform offering online courses to improve the response to health emergencies. OpenWHO enables the Organization and its key partners to transfer life-saving knowledge to large numbers of frontline responders.",
        list_all_courses: "List all courses \xbb",
        news: "News",
        platform: "%{brand}",
        show_article: "Read more",
        slider: {
            scroll_left: "Scroll left",
            scroll_right: "Scroll right"
        },
        slider_button: "List all courses",
        slider_category: "Courses for current outbreaks...",
        slider_latest: "Latest courses...",
        tile: {
            more: "More"
        }
    },
    i18n: {
        plural: {
            keys: ["one", "other"],
            rule: {}
        }
    },
    ical: {
        course_start: "Course %{title} starts",
        course_start_desc: "Course %{title} starts on %{site}",
        item_submission_deadline: "Submissions for %{title} ending",
        item_submission_deadline_desc: "Submissions for %{title} ending on %{site}",
        item_submission_publishing: "Submissions for %{title} will be published",
        item_submission_publishing_desc: "Submissions for %{title} will be published on %{site}",
        section_start: "%{title} starts in course %{course_title}",
        section_start_desc: "%{title} starts in course %{course_title} on %{site}"
    },
    interrupts: {
        mandatory_profile_fields: "To help us improve your learning experience, please fill out the required fields before proceeding on to your courses."
    },
    items: {
        deleted_item: "Item deleted.",
        deleted_quiz: "Quiz deleted.",
        edit: {
            questions: "Question(s):",
            quiz_info: "Quiz info",
            quiz_total_points: "Quiz Total Points: "
        },
        lti: {
            allowed_attempts: "Allowed attempts",
            bonus_exercise: "This is a bonus exercise",
            bonus_points: "Earn bonus points by solving this task.",
            custom_exercise_fields: "Additional parameters for this exercise",
            custom_fields_placeholder: "key1=value1&key2=value2",
            exercise_title: "Optional exercise title",
            graded: "This is a graded exercise.",
            instruction: "Instructions",
            launch_lti_exercise: "Launch exercise tool",
            lti_provider: "LTI provider",
            lti_providers_course: "Course Providers",
            lti_providers_global: "Global Providers",
            main_exercise: "This is the section's main exercise.",
            not_available: "This exercise is not available anymore.",
            provider_deleted: "The LTI provider attached to this item has been deleted.",
            results: "Exercise Results",
            ungraded: "This is an ungraded exercise.",
            wait_message_new_window: "The external tool will open in a new window.",
            wait_message_same_window: "The external tool will load right away.",
            weight: "Points"
        },
        new: {
            back_to_editor: "Back to course editor"
        },
        quiz: {
            actions: "Actions",
            add_answer: "Add answer",
            allowed_attempts: "Allowed attempts",
            answer: "Answer text",
            answer_correct: "Answer is correct",
            answer_explanation: "Explanation",
            answer_explanation_text: "Add an explanation on how to answer this",
            answer_type: "Answer type",
            bonus_quiz: "This is a bonus quiz",
            confirm_start_quiz: {
                btn_cancel: "Cancel",
                btn_go: "Go",
                subline: "Set your watch! Remember: Even if you close your browser, you can\u2019t stop the clock!",
                text: "<b>Ready</b> to start the clock?"
            },
            delete_question: "Delete question",
            edit: "Edit quiz",
            edit_question: "Edit question",
            enter_answer: "Enter your answer here",
            enter_question: "Enter your question here",
            enter_question_explanation: "Enter your explanation here",
            exclude_from_recap: "Exclude from recap",
            graded_quiz: "This is a graded quiz",
            hide_question_explanation: "Hide Explanation",
            import: {
                confirmButtonText: "Upload",
                download: "Choose the xml-file",
                errorTitle: "Errors occurred while importing quizzes",
                preview: {
                    answers: "Answers",
                    confirmButtonText: "Import",
                    errorTitle: "Errors occurred while validating quizzes",
                    extrefid: "Ext-Ref-ID",
                    legend: 'A <span class="updated_record">colored row</span> indicates a quiz, which has been inserted already. This quiz will neither be updated nor inserted!<br/>To add this quiz, please delete the existing one.',
                    name: "Name",
                    questions: "Questions",
                    section: "Section",
                    title: "Quizzes preview"
                },
                title: "Import quizzes from XML"
            },
            import_quizzes_by_service: "Import quizzes from spreadsheet",
            import_quizzes_success: "Quizzes successfully imported!",
            instruction: "Instructions",
            instruction_placeholder: "Enter helpful instructions for graded quizzes (assignments and bonus)",
            limit_tooltip: "Value must be greater than 0!",
            lock_submissions_at: "Lock submissions after",
            move_question_down: "Move question down",
            move_question_to_bottom: "Move question to bottom",
            move_question_to_top: "Move question to top",
            move_question_up: "Move question up",
            nav: {
                properties: "Quiz settings",
                questions: "Questions"
            },
            points: "Points",
            proctoring: {
                book_certificate: "Book the Certificate",
                certificate_booked: {
                    exclusion_criteria: "<ul><li>You need to be the <strong>only person</strong> in front of the camera. If no person, multiple people, or another person than the registered one is visible, proctoring will fail.</li> <li>Choose an exam period where you are <strong>undisturbed</strong> and do not have to leave your place during the exam.</li> <li>Ensure <strong>adequate light conditions</strong> and that your face is clearly visible. A source of light in the back can make your face appear too dark in the camera.</li> <li>Don't use anything that covers your head or face (hat, sunglasses, ...). Reading glasses are allowed.</li> </ul> <p>Technical advice:</p> <ul><li>Make sure your camera is turned on and fully functional. Remove your webcam cover.</li> <li>Close all other applications that access the camera.</li> <li>During the exam, make sure the assignment tab is the only open tab in your browser.</li></ul>",
                    instructions: "Please make sure to follow the rules (<a href='https://smowl.net/en/faqs-proctoring-smowl/camera-monitoring/' target='_blank' rel='noopener'>FAQ</a> | <a href='/pages/proctoring_guidelines' target='_blank'>guide</a>). In case of a violation, we cannot issue a Certificate. Always remember:",
                    title: "You successfully booked your Certificate"
                },
                deadline_passed: "The registration period for the Certificate has passed. You can still earn a Record of Achievement by completing the graded quizzes.",
                upgrade_information: {
                    info: "You can still register for the Certificate until <strong>%{deadline}</strong>. The Certificate is a paid add-on. You can always earn a free Record of Achievement by completing the graded quizzes.",
                    registration_periods_info: "<b>Registration Periods:</b> You can register for the Certificate only before the submission deadline of the second graded assignment. If the deadline for submitting the second assignment has expired, an application for the proctored examination is no longer possible.",
                    title: "Do you want to book a Certificate?"
                },
                upgrade_not_possible: "You already have submitted too many weekly assignments and therefore can no more book the Certificate. You can still earn a Record of Achievement by completing the graded quizzes."
            },
            publish_results_at: "Publish results date",
            question: "Question",
            question_alert: "Review this question!",
            question_explanation: "Explanation",
            question_text: "Question text",
            question_type: "Question type",
            question_types: {
                essay_question: "Essay",
                free_text_question: "Free Text Question",
                multiple_answer_question: "Multi Select Question",
                multiple_choice_question: "Single Select Question"
            },
            quiz_is_selftest: "This quiz is a self-test. You can repeat it as often as you like.",
            quiz_is_survey: "Share your feedback with us. Please take 1 minute of your time to answer the following survey questions. Your feedback is valuable to improve the learning experience at %{brand}!",
            select_answer_type: "Please select an answer type",
            select_question_type: "Please select a question type to add question to this quiz",
            show_question_explanation: "Show Explanation",
            shuffle_answers: "Shuffle answers",
            skip_welcome_page: "Skip welcome page",
            start_quiz_now: "Start quiz now",
            submit: {
                answer: "Create Answer",
                question: "Create Question"
            },
            submit_warning: "You haven't submitted your running quiz yet!",
            survey_quiz: "This is a survey",
            time_limit: "Time limit",
            unlimited_attempts: "Unlimited attempts",
            unlimited_time: "Unlimited time"
        },
        requirements: {
            headline: "Requirements not met",
            not_fulfilled: "This learning unit has requirements you have not fulfilled. Please complete all of these units:",
            result_requirement: "Complete this learning unit with a score of at least %{threshold}% of the maximum points.",
            visit_requirement: "Visit this learning unit and work through the content."
        },
        rich_text: {
            form_item_rich_text: {
                markup: "Markup",
                placeholder_text: "Enter full description"
            }
        },
        show: {
            coursestate: {
                archive: "Self-paced course",
                available: "Course is available",
                hidden: "Course is hidden",
                preparation: "In preparation",
                upcoming: "Course has not yet started",
                was_available: "Course is finished"
            },
            hide_nav: "Hide navigation",
            learning_objectives_infobox_link: "Select your objective now!",
            learning_objectives_infobox_text: "Personal learning objectives are available for this course.",
            next_item: "Next",
            prev_item: "Previous",
            profile_completion_modal: {
                close: "Close",
                header: "New Profile Categories",
                open_profile: "Open Profile",
                salutation: "Dear Learner,",
                treatments: {
                    control: "We have updated our profile categories. Please take a moment to complete your profile.",
                    public_benefit: "We have updated our profile categories. Please take a moment to complete your profile.</p><p>By providing your information, you support %{brand} in improving its free online education services and the learning experience for the whole %{brand} community.",
                    public_benefit_and_cost: "We have updated our profile categories. Please take a moment to complete your profile.</p><p>By providing your information, you support %{brand} in improving its free online education services and the learning experience for the whole %{brand} community.</p><p>Your profile will only be visible to you and the %{brand} team but not to other %{brand} users. Your data will only be used for research and platform improvement in accordance with our <a href='%{data_protection_link}' target='_blank'>data protection</a> standards."
                }
            },
            quiz: {
                error_not_enrolled: "You are not enrolled. Please enroll to see this quiz.",
                instruction: "Instructions",
                start_quiz_now: "Start quiz now"
            },
            show_nav: "Show navigation",
            toggle_nav_hint: "Toggle navigation",
            unsupported_browser: "Your browser is not supported. Please use a modern browser.",
            video: {
                about: "About this video",
                activity: "Activity",
                ask_own_question: "Start a new topic",
                download: {
                    audio: "Audio as MP3",
                    disabled: "Downloading this video/audio is not possible due to licensing regulations.",
                    hd_video: "Video (HD) as MP4",
                    reading_material: "Reading material",
                    sd_video: "Video (SD) as MP4",
                    slides: "Presentation slides as PDF",
                    subtitled_video: "Video (Subtitled) as MP4",
                    transcript: "Transcription",
                    video: "Video as MP4"
                },
                downloads: "Downloads",
                no_activity: "Not yet here",
                num_hidden_topics: {
                    one: "1 more topic",
                    other: "%{count} more topics",
                    zero: "No more topics"
                },
                num_questions: {
                    one: "1 topic",
                    other: "%{count} topics",
                    zero: "No topics"
                },
                num_replies: {
                    one: "1 reply",
                    other: "%{count} replies",
                    zero: "No replies"
                },
                preview: {
                    enroll: "Enroll yourself for free",
                    info: "This video belongs to the %{platform} course <b>%{course_title}</b>. Do you want to see more?"
                },
                questions_and_discussions: "Discussion topics",
                read_more: "Read more",
                timestamp: "(%{time})",
                transcript: {
                    current_position: "Scroll to current position",
                    select_language_settings: "To enable the transcript, please select a language in the video player settings menu."
                },
                video_events: "Video Events",
                view_or_answer: "View or reply"
            }
        },
        type_label: {
            bonus_exercise: "Bonus Exercise",
            bonus_peer_assessment: "Bonus Peer Assessment",
            bonus_test: "Bonus Test",
            exercise: "Exercise",
            graded_exercise: "Graded Exercise",
            graded_test: "Graded Test",
            peer_assessment: "Peer Assessment",
            rich_text: "Text",
            self_test: "Self-test",
            survey: "Survey",
            video: "Video"
        },
        update: {
            success: "The item was updated successfully."
        },
        video: {
            errors: {
                invalid_subtitle: {
                    one: "Validation failed: Invalid subtitle cue on the WebVTT file at cue %{identifiers}.",
                    other: "Validation failed: Invalid subtitle cues on the WebVTT file at cues %{identifiers}."
                },
                update: "Something went wrong while updating this item."
            }
        }
    },
    knowledge_documents: {
        actions: "Actions",
        add_language: "Add Language",
        cancel: "Cancel",
        corresponding_courses: "Corresponding Courses",
        corresponding_document: "Corresponding document",
        courses: "In courses",
        courses_placeholder: "Choose courses, where this document should be used",
        create: "Create a document",
        delete: "Delete",
        delete_all: "Delete Document and all translations",
        delete_localization: "Delete translation",
        description: "Description",
        documents: "Documents",
        download: "Download",
        edit: "Edit",
        edit_document: "Edit Document",
        filename: "Filename",
        filter: "Filter by",
        help: {
            edit: "Documents can be displayed in different languages. Use this form to edit the internal information about this document. These are visible to other administrators and should hold information to clearly recognize the content and goal of the document. Below you can see and edit the translations of this document.",
            help: "Help",
            new: "Documents can be displayed in different languages. Use this form to create a whole new document. You have to provide at least one translation for the users to see. The uploaded files have to be a PDF to ensure every user can display them."
        },
        hint: "Upload is limited to PDF. The file size must not exceed 8 MB.",
        id: "Id",
        index: "Back to Overview",
        internal: {
            description: "Internal document description",
            description_placeholder: "Enter an internal description for the document.This will be only visible for other administrators.",
            information: "Internal Information",
            title: "Internal title",
            title_placeholder: "Enter an internal title for the document. This will be only visible for other administrators."
        },
        language: "Language",
        languages: "Languages",
        localization: {
            create: "Add new translation",
            description: "Description (in chosen language)",
            description_placeholder: "Enter a description for this document.This should be written in the same language as the attached file.",
            edit: "Edit translation",
            file: "File (as pdf)",
            file_placeholder: "Choose a file to upload",
            language: "Language written in",
            new_file: "Upload new file (as pdf)",
            old_file: "Old file",
            show_file: "Show current file",
            this_translation: "This translation of the document",
            title: "Title (in chosen language)",
            title_placeholder: "Enter document title in chosen language",
            translations: "Translations"
        },
        new: "Add new Document",
        no_documents: "No documents available",
        or_course: "Filter by course",
        path: "Path",
        platform: "Use on platform",
        public: "Public?",
        reset_filter: "Reset Filter",
        select_courses: "Select courses",
        select_tags: "Select tags",
        show: "Show Details",
        size: "Size",
        submit: "Submit",
        tags: "Tags",
        title: "Title",
        update: "Update Document",
        upload_file: "Upload documents"
    },
    languages: {
        item: "%{name}",
        language: "Language",
        name: {
            am: "\u12a0\u121b\u122d\u129b",
            ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
            az: "Az\u0259rbaycan dili",
            bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
            bmb: "Ebembe",
            bn: "\u09ac\u09be\u0982\u09b2\u09be",
            ca: "Catal\xe0",
            cn: "\u4e2d\u6587",
            cs: "\u010ce\u0161tina",
            de: "Deutsch",
            el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
            en: "English",
            eo: "Esperanto",
            es: "Espa\xf1ol",
            fa: "\u0641\u0627\u0631\u0633\u06cc",
            "fa-AF": "\u062f\u0631\u06cc",
            ff: "Fulfulde",
            fi: "Suomi",
            fr: "Fran\xe7ais",
            ha: "Hausa",
            hi: "\u0939\u093f\u0928\u094d\u0926\u0940, \u0939\u093f\u0902\u0926\u0940",
            ht: "Krey\xf2l ayisyen",
            hu: "Magyar",
            hy: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
            id: "Bahasa Indonesia",
            ig: "As\u1ee5s\u1ee5 Igbo",
            it: "Italiano",
            ja: "\u65e5\u672c\u8a9e",
            ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d4\u10dc\u10d0",
            kaa: "Qaraqalpaq",
            kk: "\u041a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456",
            km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
            ko: "\ud55c\uad6d\uc758",
            kr: "Kanuri",
            ksw: "\u1000\u100a\u102e\u1005\u103e\u102e\u1064\u1000\u103b\u102d\u102c\u103a",
            ku: "Kurd\xee",
            ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
            ln: "Ling\xe1la",
            lo: "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7",
            luo: "Dholuo",
            lv: "Latvie\u0161u valoda",
            mai: "\u092e\u0948\u0925\u093f\u0932\u0940",
            mg: "Malagasy",
            mk: "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
            mn: "\u041c\u043e\u043d\u0433\u043e\u043b",
            mr: "\u092e\u0930\u093e\u0920\u0940",
            my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
            ne: "\u0928\u0947\u092a\u093e\u0932\u0940",
            nl: "Nederlands",
            om: "Afaan Oromoo",
            or: "\u0b13\u0b21\u0b3c\u0b3f\u0b06",
            pa: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",
            pcm: "Naij\xe1",
            pl: "Polski",
            ps: "\u067e\u069a\u062a\u0648",
            pt: "Portugu\xeas",
            "pt-BR": "Portugu\xeas brasileiro",
            rhg: "Ru\xe1ingga",
            ro: "Rom\xe2n\u0103",
            ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
            run: "Kirundi",
            shn: "\u107d\u1083\u1087\u101e\u1083\u1087\u1010\u1086\u1038",
            si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
            sn: "chiShona",
            so: "Soomaaliga",
            sq: "Shqip",
            sr: "\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a",
            sw: "Kiswahili",
            ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
            te: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
            tet: "Tetun",
            tg: "\u0442\u043e\u04b7\u0438\u043a\u04e3",
            th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
            tk: "T\xfcrkmen",
            tr: "T\xfcrk\xe7e",
            tum: "Chitumbuka",
            uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
            ur: "\u0627\u0631\u062f\u0648",
            uz: "O'zbek",
            vi: "Ti\u1ebfng Vi\u1ec7t",
            yao: "chiYao",
            yo: "Yor\xf9b\xe1",
            zh: "\u4e2d\u6587",
            zu: "isiZulu"
        },
        title: {
            am: "Amharic",
            ar: "Arabic",
            az: "Azerbaijani",
            bg: "Bulgarian",
            bmb: "Bembe",
            bn: "Bengali",
            ca: "Catalan",
            cn: "Chinese",
            cs: "Czech",
            de: "German",
            el: "Greek",
            en: "English",
            eo: "Esperanto",
            es: "Spanish",
            fa: "Farsi",
            "fa-AF": "Dari",
            ff: "Fula",
            fi: "Finnish",
            fr: "French",
            ha: "Hausa",
            hi: "Hindi",
            ht: "Haitian creole",
            hu: "Hungarian",
            hy: "Armenian",
            id: "Indonesian",
            ig: "Igbo",
            it: "Italian",
            ja: "Japanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kk: "Kazakh",
            km: "Khmer",
            ko: "Korean",
            kr: "Kanuri",
            ksw: "Sgaw Karen",
            ku: "Kurdish",
            ky: "Kyrgyz",
            ln: "Lingala",
            lo: "Lao",
            luo: "Luo",
            lv: "Latvian",
            mai: "Maithili",
            mg: "Malagasy",
            mk: "Macedonian",
            mn: "Mongolian",
            mr: "Marathi",
            my: "Burmese",
            ne: "Nepali",
            nl: "Dutch",
            om: "Oromo",
            or: "Oriya",
            pa: "Panjabi",
            pcm: "Nigerian Pidgin",
            pl: "Polish",
            ps: "Pashto",
            pt: "Portuguese",
            "pt-BR": "Brazilian portuguese",
            rhg: "Rohingya",
            ro: "Romanian",
            ru: "Russian",
            run: "Kirundi",
            shn: "Shan",
            si: "Sinhalese",
            sn: "Shona",
            so: "Somali",
            sq: "Albanian",
            sr: "Serbian",
            sw: "Swahili",
            ta: "Tamil",
            te: "Telugu",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            tk: "Turkmen",
            tr: "Turkish",
            tum: "Tumbuka",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            vi: "Vietnamese",
            yao: "Yao",
            yo: "Yoruba",
            zh: "Chinese",
            zu: "Zulu"
        }
    },
    learn: {
        title: "Recap"
    },
    learning_rooms: {
        admin: {
            accept_member: "Accept membership",
            actions: "Actions",
            add_user: "Add a User",
            delete: "Delete Collab Space",
            delete_confirm: "Do you really want to delete this Collab Space?",
            delete_warning: "Only use this button, if you know what you are doing!",
            demote_member: "Demote member to regular member",
            demote_member_confirm: "Do you really want to take away adminstrative privileges of this Collab Space member?",
            description: "Description",
            description_hint: "Please provide a short and meaningful description for the purpose of this collab space. Characters left: ",
            details: "Details",
            details_hint: "You can add a detailed internal description for the collab space here.",
            headline: "Collab Space Administration",
            is_open: "This Collab Space is open",
            kick_member: "Kick member",
            kick_member_confirm: "Do you really want to remove this user from the Collab Space?",
            mail: "Dear %{recipient}, Best regards %{sender}",
            mail_to_member: "Write a mail to member",
            member_management: "Membership management",
            member_name: "Member name",
            membership_type: "Membership type",
            name: "Name",
            promote_member: "Promote member to admin",
            promote_member_confirm: "Do you really want to make this member an admin of this Collab Space?",
            promote_member_mentor: "Promote member to mentor",
            promote_member_mentor_confirm: "Do you really want to make this member a mentor of this Collab Space?",
            properties: "Collab Space properties"
        },
        calendar: {
            categories: {
                available: "Available",
                meeting: "Meeting",
                milestone: "Milestone",
                other: "Other",
                unavailable: "Unavailable"
            },
            close: "Close",
            delete_event: "Delete",
            edit_event: "Edit Event",
            loading_events: "Loading Events",
            new_event: "New Event",
            permissions: "You do not have the permissions to edit this event"
        },
        closed: "closed",
        create: "Create new Collab Space",
        create_button: "Create Collab Space",
        files: {
            confirm_delete: "Do you really want to delete this file from the server?",
            delete: "Delete",
            details: "Details",
            download: "Download",
            dropzone: {
                hint: "Allowed document types are pdf, txt, xml, jpg, png, gif, docx, pptx, xlsx, odt, odp, ods, csv. Max. size: %{maxFileSize} MB.",
                upload_files: "Upload files"
            },
            empty: "No files have been uploaded so far.",
            file: {
                last_modified: "Last Modified",
                size: "Size",
                title: "Title"
            },
            headline: "Share files"
        },
        flash_messages: {
            error: {
                delete_space: "The Collab Space cannot be deleted.",
                membership_elsewhere: "This learner is already assigned to another Collab Space. Remove the learner from the other one and try again.",
                membership_exists: "The person is already assigned to this Collab Space."
            },
            notice: {
                status_joined: "You just joined the Collab Space %{learning_room}! Be nice!",
                status_pending: "You have requested to join the Collab Space %{learning_room}. Your request is awaiting approval."
            },
            success: {
                delete_room: "The Collab Space has been successfully deleted."
            }
        },
        go: "Enter Collab Space",
        is_closed: "This is a <i>closed</i> Collab Space. Membership requests must be approved by a Collab Space administrator.",
        is_open: "This is an <i>open</i> Collab Space. Anyone can join.",
        join: "Join Collab Space",
        list: "List of Collab Spaces",
        member_list: "Member list",
        my_rooms: "My Collab Spaces",
        name: "Name",
        nav: {
            administration: "Manage your Collab Space",
            calendar: "Organize events",
            dashboard: "View recent activity",
            discussions: "Discuss with your team",
            etherpad: "Collaborate on texts",
            files: "Share files",
            tpa: "Submit your team work and evaluate your peers (%{title})",
            video_chat: "Start a video chat"
        },
        open: "open",
        pending: "Membership pending",
        pending_text: "You are currently waiting for your membership status to be approved.",
        quit_membership: "Quit my membership",
        quit_membership_confirm: "Do you really want to quit your membership in this Collab Space?",
        request: "Request membership",
        teacher_information: "<i>For your information:</i> course teachers and teaching assistants may access your Collab Space without the need to be a member.<br />This applies for open Collab Spaces as well as for closed ones.",
        team_name: "Team: %{name}",
        update_button: "Update Collab Space",
        video_chats: {
            btn_txt: "Start video chat on Jitsi Meet",
            chat_info: {
                headline: "When the meeting takes place",
                list_text: ["Follow the meeting link.", "Enter the username that you want to use during the meeting.", "Press the \u201cJoin meeting\u201c button.", "You are now in the video chat.", ["At the bottom of the screen, you will find a menu bar with useful functions such as:", "Microphone (mute / unmute)", "Camera (start / stop)", "Screen sharing (start / stop)", "Chat window (open / close)", "Raise your hand (on / off)", "Participants (show / stop showing)", "And many more functions"], "To be seen, you need to start your camera. To be heard, you have to unmute your microphone."]
            },
            description: "Arrange a meeting time with your teammates and decide who should share the link to the video chat.",
            headline: "Video chat",
            note: "Note: When you start the video chat, you will be directed to a third-party provider (\u201cJitsi Meet\u201c). <br>Jitsi Meet is an open-source project. We will not pass on any of your data. <br>You do not need to create an account on Jitsi Meet.",
            start_chat: {
                headline: "Before the video chat",
                how_to: "How to create and share a meeting link:",
                list_text: ["Press the \u201cStart video chat on Jitsi Meet\u201d button. A new window or tab opens.", "Press the \u201cStart Meeting\u201d button. A new window opens.", "Copy the meeting link. You\u2019ll find it in the address bar of the browser.", "Share the meeting link with your teammates. You can use the discussion forum in your Collab Space to share the link."]
            }
        }
    },
    lti_providers: {
        index: {
            add: "Add LTI Provider"
        },
        lti_provider: {
            actions: "Actions",
            confirm_delete: "Deleting will break all course items still referencing this provider. Do you really want to delete it?",
            delete: "Delete LTI provider",
            edit: "Edit LTI provider"
        }
    },
    next_dates: {
        course_start: "Course starts in",
        deadline_widget: {
            empty_state: "There are no upcoming deadlines for you in this course.",
            events: {
                item_submission_deadline: "Deadline in %{when}",
                on_demand_expires: "Your course reactivation expires in %{when}"
            },
            tooltip: "Click to view your upcoming deadlines for this course"
        },
        item_submission_deadline: "Submissions for %{title} ending in",
        item_submission_publishing: "Submissions for %{title} will be published in",
        on_demand_expires: "Complete your Record of Achievement before your course reactivation expires in",
        section_start: "%{title} starts in"
    },
    notification_user_disables: {
        show: {
            deactivate_for: {
                announcement: "Receiving any more platform news will be deactivated.",
                course_announcement: "Receiving any more course news will be deactivated.",
                global: "Receiving any more notifications via email will be deactivated.",
                pinboard: "Receiving any more pinboard news will be deactivated."
            },
            title: "Deactivate notifications"
        }
    },
    number: {
        currency: {
            format: {
                delimiter: ",",
                format: "%u%n",
                precision: 2,
                separator: ".",
                significant: !1,
                strip_insignificant_zeros: !1,
                unit: "$"
            }
        },
        format: {
            delimiter: ",",
            precision: 3,
            separator: ".",
            significant: !1,
            strip_insignificant_zeros: !1
        },
        human: {
            decimal_units: {
                format: "%n %u",
                units: {
                    billion: "Billion",
                    million: "Million",
                    quadrillion: "Quadrillion",
                    thousand: "Thousand",
                    trillion: "Trillion",
                    unit: ""
                }
            },
            format: {
                delimiter: "",
                precision: 3,
                significant: !0,
                strip_insignificant_zeros: !0
            },
            storage_units: {
                format: "%n %u",
                units: {
                    byte: {
                        one: "Byte",
                        other: "Bytes"
                    },
                    eb: "EB",
                    gb: "GB",
                    kb: "KB",
                    mb: "MB",
                    pb: "PB",
                    tb: "TB"
                }
            }
        },
        nth: {
            ordinalized: {},
            ordinals: {}
        },
        percentage: {
            format: {
                delimiter: "",
                format: "%n%"
            }
        },
        precision: {
            format: {
                delimiter: ""
            }
        }
    },
    open_badges: {
        badge_class: {
            description: 'This badge verifies that the candidate completed the %{brand} course "%{course_title}" and passed the necessary exercises and exams to earn a course certificate.',
            name: "Successfully completed in %{year}: %{course_title}",
            name_fallback: "Successfully completed: %{course_title}"
        },
        issuer_description: "OpenWHO aims to equip all frontline responders with the knowledge they need to better contain disease outbreaks\nand manage health emergencies. It also aims to foster discussions, feedback and sharing of expert knowledge on\npublic health.\n"
    },
    pages: {
        edit: {
            headline: "Edit Static Page"
        },
        not_found: {
            message: "This static page is not known. Please check the URL / name. If the content is missing, you can create new translations."
        },
        show: {
            edit_translation: {
                cn: 'Edit Chinese translation "%{title}"',
                de: 'Edit German translation "%{title}"',
                en: 'Edit English translation "%{title}"',
                es: 'Edit Spanish translation "%{title}"',
                fr: 'Edit French translation "%{title}"',
                nl: 'Edit Dutch translation "%{title}"',
                "pt-BR": 'Edit Brazilian portuguese translation "%{title}"',
                ru: 'Edit Russian translation "%{title}"',
                uk: 'Edit Ukrainian translation "%{title}"'
            },
            last_changed: "This page was last changed at %{date}.",
            new_translation: {
                cn: "Add Chinese translation",
                de: "Add German translation",
                en: "Add English translation",
                es: "Add Spanish translation",
                fr: "Add French translation",
                nl: "Add Dutch translation",
                "pt-BR": "Add Brazilian portuguese translation",
                ru: "Add Russian translation",
                uk: "Add Ukrainian translation"
            }
        }
    },
    peer_assessment: {
        "Xikolo::PeerAssessment::AssignmentSubmission": "Submit your work",
        "Xikolo::PeerAssessment::PeerGrading": "Evaluate your peers",
        "Xikolo::PeerAssessment::Results": "View your results",
        "Xikolo::PeerAssessment::SelfAssessment": "Evaluate yourself",
        "Xikolo::PeerAssessment::Training": "Learn to grade",
        ack_error: "Please acknowledge the code of honour",
        administration: {
            create_new: "Create new assessment",
            edit_header: "Peer Assessment Configuration for '%{title}'",
            file_upload_failed: "Unknown upload error",
            files: {
                info_text: "These files will shown as assignment attachments and will be downloadable by the students. Use the dropzone below (click or drag and drop) to upload files. The files will start uploading immediately - wait for them to finish!"
            },
            item_creation_info_text: '<p>Peer assessment configuration will take place after the item has been created (if you choose to create a new one).<p><p><strong>Existing assessments will not be copied</strong>, but the item will link to it. This functionality is intended for assessments that are distributed over a longer time span.</p><p>If you wish to edit the assessments, you can do so <a href="%{edit_path}" target="_blank">here</a>.</p>',
            missing_permission: "You do not have the necessary rights to trigger this action.",
            new_or_existing: "New / existing assessment",
            overview: "Go to Assessment Overview",
            peer_assessment: {
                allow_gallery_opt_out: "Allow gallery out-opt",
                allowed_attachments: "Allowed number of attachments",
                allowed_file_types: "Allowed file types<br/>(file extensions separated by comma and with preceding dot, e.g. '.pdf, .mp4, .png')",
                grading_hints: "Grading hints<br/>(shown for the reviewer at the top of the page - keep it general here)",
                instructions: "Assignment instructions<br/>(Assignment to solve for the students)",
                is_team_assessment: "As team assessment",
                max_file_size: "Maximum size of attachments in MB",
                title: "Title",
                usage_disclaimer: "Usage disclaimer<br/>(text and/or links, which must be acknowledged at the start of the assessment - please full sentence(s).)"
            },
            rubrics: {
                add: "Add",
                add_option: "Add new option",
                back_to_overview: "Back to overview",
                confirm_delete_message: "You won't be able to recover it.",
                confirm_delete_title: "Really delete this rubric?",
                confirm_option_delete: "Delete this rubric option?",
                create: "Create Rubric",
                create_success: "Successfully created rubric",
                deadline_warning: "Important! You should only edit the peer assessment phases if the \u201cLearn to grade\u201d and/or \u201cEvaluate your peers\u201d phases have NOT yet begun. Otherwise, this can lead to problems at a later stage!",
                delete: "Delete this rubric",
                delete_option: "Delete",
                delete_option_message: "You won't be able to recover it.",
                delete_option_title: "Delete this option?",
                destroy_failure: "Something went wrong while deleting the rubric. Contact Helpdesk if the problem persists.",
                destroy_success: "Rubric deleted",
                edit: "Edit this rubric",
                hints: "Hints/General explanation (will be displayed right above all grading options for this rubric, keep it brief and informative here)",
                index_info: "Below you find all rubrics of this assessment as a preview. You can edit and delete rubrics and you can move them up and down to change the order they are presented to the student <strong>which can be quite important</strong>, so please consider this as well.",
                moved_failure: "Failed to move grading rubric",
                moved_success: "Grading rubic moved",
                movedown: "Move rubric down the list",
                moveup: "Move rubric up the list",
                new: "Add new rubric",
                new_info: "First, select how many grading options you want for this rubric. Then fill out everything below. <strong>It is critical to state as clearly and explicitly as possible what the student should grade and what the criteria are.</strong> Keep that in mind when formulating the rubrics! <strong>The options will be ordered by points automatically!</strong> Do not give the same amount of points twice.",
                option_description_placeholder: "Brief description here (optional, but strongly encouraged)",
                options: "Rubric Options",
                options_to_add: "Number of grading options<br/> (to add/append)",
                sort_info: "Newly created rubric options will automatically be sorted into their position based on their points.",
                title: "Rubric title",
                title_placeholder: "E.g. Writing Style, Technical Knowledege, ...",
                update: "Update Rubric",
                update_failure: "Failed to save rubric",
                update_success: "Rubric updated"
            },
            save_changes: "Save Changes",
            save_failure: "Your changes could not be saved",
            save_success: "Your changes have been sucessfully saved",
            steps: {
                creation_success: "The peer assessment phases were created successfully.",
                deadline: "Deadline (UTC)",
                initial_setup: "In the next step, you'll define the start and end date for each phase.",
                optional: "Optional Step",
                optional_training_notice: "The Learn to grade phase is optional. The participants can review as many samples as possible.",
                required_reviews: "Required number of reviews (recommended: 3-5. Consider the workload for participants when defining the number of required reviews!)",
                required_trainings: "Required number of trainings (recommended: 1-3. Consider the workload for participants when defining the number of required reviews!)",
                results_deadline_notice: "The deadline for this step sets the point in time until which students are able to report problems and rate their received reviews.",
                results_only: "Results Only (Disables interaction between peers at the end)",
                select_steps: "Create",
                setup_hint: "Please select the steps you wish to include into the assessment below.",
                setup_info: ["Each peer assessment always includes the phases \u201cSubmit your work\u201d, \u201cEvaluate your peers\u201d, and \u201cView your results\u201d.", "The phases \u201cLearn to grade\u201d and \u201cEvaluate yourself\u201d are not essential and can be left out. If you include these phases, you can mark them as \u201coptional\u201d. Optional phases can be skipped by the participants.", "If you include a \u201cLearn to grade\u201d phase, the course team must evaluate 10 submissions that serve participants as training examples. The \u201cLearn to grade\u201d phase can only start after these 10 training submissions have been evaluated.", "The unlock date of each phase determines when participants can start the phase. If no unlock date has been specified, participants can start the phase as soon as they have completed the previous phase.", "The deadline is a mandatory field. It specifies by when participants have to complete the phase."],
                setup_info_about: "About the workflow phases:",
                setup_warning: {
                    confirm: "Create phases",
                    text: "You will not be able to add or remove phases later on!",
                    title: "Have you selected all the optional phases that you want to include?"
                },
                step_names: {
                    "Xikolo::PeerAssessment::AssignmentSubmission": "Submit your work",
                    "Xikolo::PeerAssessment::PeerGrading": "Evaluate your peers",
                    "Xikolo::PeerAssessment::Results": "View your results",
                    "Xikolo::PeerAssessment::SelfAssessment": "Evaluate yourself",
                    "Xikolo::PeerAssessment::Training": "Learn to grade"
                },
                title: "Please determine which phases you want to include in the peer assessment",
                unlock_date: "Unlock Date (UTC)",
                update: "Update Steps",
                update_success: "Successfully updated the workflow"
            },
            tabs: {
                files: "File Attachments",
                general: "General Assessment Configuration",
                rubrics: "Grading Rubrics",
                workflow: "Workflow Phases"
            },
            team_evaluation_rubrics: {
                explanation: "Please assess your team members based on the criteria below.",
                index_info: "Below you will find the rubrics for the evaluation of team members. They are only displayed in the self assessment phase of <strong>Team Peer Assessments</strong>.",
                new: "Add a new team evaluation rubric",
                new_info: "Students assess their team members based on the rubrics listed below, using a star rating of 0 to 3 stars. Copy and paste the criteria and criteria description:  <br> <li>Contribution: Works proactively and contributes positively to the content of the deliverable.</li> <li>Organization: Coordinates the team and structures the work.</li> <li>Social Skills: Is cooperative, open and tolerant; communicates and deals constructively with conflict.</li> </ul>",
                proposed_rubrics: "Please use the following rubrics <i>Contribution<i/>, <i>Organization<i/>, and <i>Social Skills<i/>.<br> The terms are understood as follows: <ul> <li>Contribution: Works proactively and contributes positively to the content of the deliverable.</li> <li>Organization: Coordinates the team and structures the work.</li> <li>Social Skills: Is cooperative, open and tolerant; communicates and deals constructively with conflict.</li> </ul>"
            }
        },
        advancement: {
            errors: {
                invalid_step: "Invalid step to advance to",
                no_next_step: "There is no next step to advance to.",
                not_optional: "This step can't be skipped.",
                step_incomplete: "Please complete the current step before advancing."
            }
        },
        assessment_closed: "Assessment Closed",
        assignment: {
            question: "Assignment Question",
            question_collapsible: 'Show me the <a class="collapsed" data-toggle="collapse" href="#assignment-question-body">assignment instructions<span class="caret"></span></a>'
        },
        autosave: {
            error: "We're sorry, an error occurred on our side."
        },
        coh_text: 'I have read the <a href="/pages/honor_code" id="coh_link">code of honor</a><span class="ml5">and am aware of the consequences of certain actions like </span><strong>plagiarism, offensive/mature content/language and missed deadlines</strong>.',
        conflict: {
            FalseClass: "No",
            TrueClass: "Yes",
            absolute: "Absolute delta",
            accused_adjustment: "Accused Student Grade Adjustment:",
            accused_student: "Accused student",
            all_reasons: {
                grading_conflict: "Grading conflict",
                no_reviews: "No Reviews",
                offensive_content: "Offensive content",
                other: "Other reason",
                plagiarism: "Plagiarism",
                unrelated: "No assignment related content"
            },
            back_to_overview: "Back to overview",
            closed: "Closed",
            comment: "Explanation / Comment",
            comment_placeholder: "Sources or an explanation to support your claims",
            conflict_reconciliation: "Conflict Reconciliation",
            conflict_subject: "Conflict subject",
            conflicting_changes: "Somebody made changes to the grades during your reconciliation (possibly through other conflicts, or this conflict has already been closed by somebody). Please review the grades again in context to these changes. Your changes were (if any): %{changes}",
            corr_submission: "Corresponding Submission",
            delta: "Delta",
            dependent_conflict_warning: 'The student reported this review, which takes it out of the grade computation. It is recommended to resolve the other conflict first and then review this conflict again. <a href="%{conflict_url}" target="_blank">Go to conflict.</a>',
            draft_created_at: "Submission draft created at",
            filed_against: "Filed against",
            filed_at: "Filed at",
            filed_by: "Filed by",
            filters: {
                any: "- any -",
                submit: "Apply Filter(s)"
            },
            given_grade: "Given grade: %{rec}/%{max}",
            grade: {
                absolute: "Current absolute delta",
                base: "Base points from reviews",
                delta_absolute: "Delta is absolute",
                delta_info: "Absolute deltas will set the grade to a fixed amount of points, whereas relative deltas (i.e. not checking this box) will apply their points <strong>on top of the overall grade</strong>. Everything ranging from the reviewer median points to bonus points will be ignored when an absolute delta is applied.",
                overall: "Overall",
                relative: "Current relative delta",
                set_delta: "Set delta to:"
            },
            grading_rubrics: "Grading Rubrics",
            grading_weight: "Weight",
            no_conflicts: "There are currently no conflicts to reconciliate.",
            no_review_submit_message: "You cannot revise this review, so make sure everything is correctly graded!",
            no_review_submit_title: "Submit this review?",
            no_reviews: "The student did not receive any reviews.",
            open: "Open",
            reason: "Reason",
            reasons: {
                offensive_content: "Offensive content",
                other: "Other reason",
                plagiarism: "Plagiarism",
                unrelated: "No assignment related content"
            },
            reconcile: "Reconcile",
            reconcile_button: "Save changes and close conflict",
            reconciliate_confirm: "The students will be notified after you click okay!",
            reconciliation_error: "An error occurred while saving the conflict.",
            reconciliation_info: "Here you can adjust the grade of the reporter as well as the grade of the accused student (if involved). Mark the conflict as legitimate if the report was justified. The conflict will be closed if you click the <em>Save changes and close conflict</em> button. Note that by doing so, the involved students will be notified that this conflict closed, and see changes to their grade, if any. However, changes are still possible later on. Even if the final grades are not yet available (since the assessment is in progress), you may choose to apply any grade deltas right now, which will then affect the grade computation later on. <strong>The overall grade can not be negative, and will be capped at zero points.</strong> You can also comment here and explain your decisions, visible only for other teaching staff members.",
            reconciliation_success: "Conflict successfully closed and student notifications queued.",
            referral_id: "Referral ID",
            referral_info: "This ID uniquely identifies this conflict. Involved students have this ID for further help desk requests.",
            reporter: "Reporter",
            reporter_adjustment: "Reporter Grade Adjustment:",
            review: "Review",
            review_info: "The review has been reported, the corresponding submission is from the reporter.",
            review_reported: "Written feedback reported.",
            review_text: "Review Text",
            reviews_info_text: "Below you can find the reviews for the submission above.",
            search_by_referral: "Search by referral ID",
            state: "State",
            subjects: {
                blank: "-",
                review: "Review",
                submission: "Submission"
            },
            submission: "Student Submission",
            submission_info: "The author of the submission requested a regrading, the reviews are the reviews s/he received.",
            submission_reported: "The learner reported this submission. An additional review is required.",
            submit: "File report",
            submit_message: "You won\u2019t be able to revise your decision, and filling an unjustified report may have consequences (refer to the code of honor for further details).",
            submit_message_title: "Report this problem?",
            submssion_updated_at: "Submission last updated at",
            suspended: "Review not included in overall peer grade",
            teacher_notes: "Teaching staff notes (not visible for student(s))",
            tpa_warning: "The delta will be applied to <b>all team members</b>!",
            view_original_submission: "Show submission relating to this report",
            view_reported_submission: "Show the reported submission",
            view_submission_to_regrade: "Show the submission to be regraded"
        },
        deadline_passed: "The deadline for this peer assessment passed. Hence, you are unfortunately no longer eligible to participate.",
        disallowed_sample_html: 'Please <strong>do not</strong> use my submission as an example for the <a class="js-swal-popup" data-popup-title="%{popup_title}" data-popup-message="%{popup_message}" href="#">Learn to grade phase</a>.',
        error: "An error occurred on our side. If the problem persists, please contact the helpdesk.",
        files: {
            confirm: "Confirm",
            confirm_button: "Permanently delete",
            delete_subtitle: "You won't be able to recover it.",
            download_button: "Download",
            filename: "Filename",
            size: "Size",
            upload_default_message: "Drop files here (or click)"
        },
        gallery_opt_out: "Please <strong>do not</strong> share my submission outside the grading process (e.g. in top submission lists).",
        grading_hints: {
            headline: "General Grading Hints",
            inline: "general grading hints",
            learn_more: "Give me some"
        },
        index: {
            admin: {
                conflict_overview: "Conflict overview",
                edit: "Edit",
                empty_msg: "This course has no peer assessments yet. You can add some via <em>Course Structure &amp; Content</em> (add a <em>Peer Assessment</em> item).",
                grade_samples: "grade samples",
                manage_gallery: "Manage Gallery",
                manage_submissions: "Manage Submissions",
                missing_train_samples: "Missing training samples",
                open_training: "Training can be opened",
                view: "Go to assessment",
                view_training: "Training sample overview"
            },
            alert_assessments_not_available: "Peer assessments are currently not available. Please check again later when the course started and sectios become available.",
            headlines: {
                my_statistics: "My Peer Assessment Statistics",
                overall_statistics: "Overall Peer Assessment Statistics",
                overview: "Peer Assessment Overview"
            },
            table: {
                assessment: "Assessment",
                awards: "Award Nominations",
                grade: "Your Grade",
                no_conflicts: "Conflicts",
                progress: "Progress",
                section: "Section",
                status: "Status",
                week: "Week"
            }
        },
        info_texts: {
            "Xikolo::PeerAssessment::AssignmentSubmission": "<strong>Submit your work:</strong> during this phase, you submit your work. Make sure that you adhere to the submission deadline, otherwise your work cannot be graded and you will not earn any points.",
            "Xikolo::PeerAssessment::PeerGrading": "<strong>Evaluate your peers:</strong> you assess randomly assigned submissions of your peers (usually 3 to 5). Grading is done anonymously and is based on criteria provided by the instructor. Participation in the assessment stage is required if you want your own submission to be assessed and considered for points. Make sure to adhere to the deadline, otherwise your assessment will not be considered.",
            "Xikolo::PeerAssessment::Results": "<strong>View your results:</strong> points are calculated based on the aggregated score from your peers. The results (points and written feedback) will be visible in the Results section.",
            "Xikolo::PeerAssessment::SelfAssessment": "<strong>Evaluate yourself:</strong> during this phase, you evaluate your own work after you have seen the submission of your peers. If your self-evaluation score is within 10% of your overall peer grade, you'll receive bonus points. As always, make sure that you adhere to the deadline.",
            "Xikolo::PeerAssessment::Training": "<strong>Learn to grade:</strong> during this phase, you evaluate some expert-graded submissions. You can compare your grading with the instructor grading and are able to adjust/ review your grading.",
            general: "Peer assessment enables learners to assess their peers\u2019 work. This allows instructors to design assignments that need human evaluation, even in massive open online courses. Students improve their understanding of the course material and have the possibility to reflect and learn by seeing and grading the work of others."
        },
        inline: "peer assessment",
        last_saved: "Draft saved",
        locked: "This peer assessment will unlock in <strong>%{unlock}</strong>.",
        locked_notification: "While you are here, take a few minutes and read the following, which you have to acknowledge later on when the assessment starts",
        not_authorized: "You are not allowed to access this resource.",
        notes: {
            create_error: "Failed to create note.",
            delete_confirm_text: "Permanently delete this note?",
            delete_confirm_title: "Confirm deletion",
            destroy_error: "Failed to delete note.",
            error_header: "Error",
            not_allowed: "Action not allowed.",
            text: "Note",
            text_placeholder: "Your comment, only visible for other teaching staff members",
            update_error: "Failed to update note."
        },
        results: {
            advance_to_results_confirmation: {
                confirm_button: "Continue to the View Results phase",
                text: "You\u2019ll no longer be able to evaluate your own work, once you have entered the View Results phase. In order to earn bonus points for accurate self-evaluation, you need to submit your self-evaluation.",
                title: "Do you really want to continue to the View Results phase now?"
            },
            award: "This peer voted your submission to be in the best-of gallery!",
            buttons: {
                view: "View",
                view_discuss: "View and discuss"
            },
            conflict_closed: "The report has been closed by the teaching staff.",
            deadline_passed: "You can no longer do that, because the deadline for this step passed.",
            grade: "Given Grade",
            grade_composition: {
                absolute_delta: "Your grade has been set to a fixed amount of %{grade} points",
                base: "Peer Grade",
                delta: "Delta applied by teaching staff.",
                headline: "Grade Composition",
                helpers: {
                    base: "The median is used to determine the peer grade. Peer grade = median criteria 1 + median criteria 2 + \u2026 + median criteria n. ",
                    delta: "Grade corrections by the teaching staff (for example after a complaint from your side, but also if you received a report!).",
                    self_assessment: "You receive bonus points if the difference between the grade from your peers and your self-evaluation is within 10% of the maximum points available. Bonus Points = 5% of maximum points available.",
                    team_evaluation: "Points that you received from your team members for your contribution to the team effort.",
                    usefulness: "Bonus points based on the rating of your written feedback."
                },
                self_assessment: "Extra points for accurate self assessment",
                team_evaluation: "Evaluation by your team members",
                usefulness: "Extra points for reviews you wrote"
            },
            grade_exceeded: "Congratulations: You earned extra points and exceeded the maximum grade.",
            grading_conflict: {
                confirmation_text: "Only request a regrading after careful consideration!",
                confirmation_title: "Are you sure you want to request a regrade?",
                info_text: "Please read the reviews of your peers carefully. You may not completely agree with your peer's review but we would ask you to look it at from an objective point of view and also compare it to the other reviews you received. <p>If you still feel that your submission was not graded fairly and you feel you deserve a higher grade you can Request <em>Regrading</em>. Please explain why you think you deserve a higher grade and our teaching team will review your submission based on the reasons you provide.</p> <p> Note: Please use this feature with caution.</p>\n",
                label: "Explanation",
                not_eligible: "You are not eligible to request a regrading.",
                notifier: "You have requested regrading. The teaching team is currently reviewing your submission. This will take some time. You will receive an email as soon as the results are available.<br/>The referral ID for your regrading request is %{referral}. Please include this in any correspondence.",
                notifier_closed: "Your regrading request is complete. The referral ID for your regrading request is %{referral}. Please include this in any correspondence.",
                placeholder: "Please explain why you think you deserve a higher grade.",
                submit_button: "Request Regrading",
                submit_button_hint: "Re-grading is only enabled after you have rated all the reviews you received and only if there is a significant difference across the peer grades.",
                success: "You regrading request has been sent. The regrading itself may take a while, so check back later!",
                teacherview_hint_not_possible: "The regrading button is inactive because you are only displaying the results as seen by the user. The learner is not entitled to request a regrading of their work or has already requested a regrading.",
                teacherview_hint_possible: "The regrading button is inactive because you are only displaying the results as seen by the user. The learner is entitled to request a regrading.",
                user_instrumented_hint_not_possible: "The regrading button is active because you are masqueraded. The learner is not entitled to request a regrading of their work or has already requested a regrading.",
                user_instrumented_hint_possible: "The regrading button is active because you are masqueraded. The learner is entitled to request a regrading."
            },
            grading_rubrics: "Grading Rubrics",
            info_text: {
                general: ["<ul><li>After all of the previous phases have\xa0closed, the grade from your peers will be visible.</li>", "<li>You can <strong>earn extra points for reviews you wrote</strong>. These points will be displayed as soon as your peers rate the quality of your feedback (up to one extra point per review).</li>", "<li>You can earn <strong>extra-points for accurate self-assessment</strong>. If you received bonus points they are displayed below.</li>", "<li>To rate your peer\u2019s feedback and see their detailed review, click on <em>View</em>. Once you rate the individual feedback from your peers, the\xa0grade you received\xa0from the corresponding peer is displayed. Rating is optional and must be completed before the result phase closes.</li></ul>", "Your overall grade is the sum of the grade from your peers and extra points you received. The overall grade is final after the <em>View results phase</em> has closed. For more information about grading check the FAQ."],
                intro: "Below you can find the reviews you received and you have written."
            },
            invalid_rating: "Invalid rating value.",
            no_reviews: "You currently do not have any reviews, check back later!",
            nomination: "Congratulation, %{times} of your peers flagged your submission as an extraordinary submission. The teaching team might choose displaying your work in the best-of gallery. Check out the best-of gallery after the teaching team finished reviewing.",
            peer_grade: "Your peer gave you: %{grade}",
            peer_reported: "Your review has been reported by your peer for %{reason}. The teaching staff is looking into the issue; you will be notified as soon as the report is closed.<br/>The referral ID for this report is <strong>%{referral}</strong>. Please include this ID in any helpdesk request concerning this report.",
            peer_reported_short: "Your review has been reported by your peer for %{reason}.",
            peer_reported_short_submission: "Your submission has been reported by your peer for %{reason}.",
            peer_reported_submission: "Your submission has been reported by your peer for %{reason}. The teaching staff is looking into the issue; you will be notified as soon as the report is closed.<br/>The referral ID for this report is <strong>%{referral}</strong>. Please include this ID in any helpdesk request concerning this report.",
            phase: "View Results phase",
            proficiency: "Your peer rated his or her proficiency to be <strong>%{proficiency}</strong> after the training.",
            rate_first: "Please view and rate this review to see the grade you were awarded.",
            rate_first_team: "View and rate this review on behalf of your team. Your team members will then be able to see the grade you received.",
            rating: {
                confirm: "You will not be able to make further changes.",
                confirm_title: "Do you want to submit your rating?",
                explanation: {
                    intro: "<strong>Click on the stars to choose your rating, then click <em>Submit your rating</em> to rate this review.</strong>",
                    stars: ["<strong>0 Stars</strong><br/>The feedback is not helpful at all; it misses any specifics related to my work.", "<strong>1 Star</strong><br/>The feedback is helpful in some ways. It relates to my work, but is rather general and/ or ambiguous; points of appreciation and/ or concern are NOT clearly highlighted.", "<strong>2 Stars</strong><br/>The feedback is helpful. It is specific; it clearly highlights points of appreciation and/ or concern, BUT explanations and/ or practical hints are missing or not plausible.", "<strong>3 Stars</strong><br/>The feedback is very helpful. It is specific; it clearly highlights points of appreciation and/ or concern AND explanations and/ or practical hints are available and plausible."]
                },
                grading_given: "You rated your peer as: <strong>%{grade}</strong>",
                grading_received: "Your peer rated your review as: <strong>%{grade}</strong>",
                headline: "Peer Review",
                info_text: {
                    intro: "Below you will find the written review from your peer.",
                    points: ["You can now rate the review and this will reward your peer for giving meaningful feedback and/or help them to improve their reviews in the future. After rating, you can see the detailed grades for each criterion (rubric) from this peer.", "You may not completely agree with your peer`s review but we would ask you to base your rating on how helpful and constructive the review is.", "Note: The rating of reviews is optional.  Based on your rating your peer will earn extra points (up to one extra point per review). Your own grade will not be affected."]
                },
                rate_button: "Submit your rating",
                report: "Report this review",
                report_hint: "If you report a review, the course team will check your report. If the report is justified, the review will not be included in your overall grade.",
                stars: "<strong>This review has been rated with %{stars} star(s)</strong>"
            },
            rating_authorization_error: "You can not rate your own review!",
            rating_failure: "Something went wrong while rating your peer. If the problem persists please do not hesitate and contact the helpdesk.",
            rating_passed: "Rating deadline passed",
            rating_received_passed: "Your peer did not rate your review in time.",
            rating_success: "Thank you! You can now see the detailed review.",
            received_feedback: "Received Feedback",
            received_grade: "Received Grade",
            received_reviews: {
                reported_by_peer: "Your submission was reported",
                reported_peer: "You reported the received feedback"
            },
            reported: "Reported",
            reviews_received: "Reviews you received",
            reviews_written: "Reviews you wrote",
            status: {
                new_message: "New Message",
                reported: "Reported",
                status: "Status"
            },
            waiting_for_deadline: "Your grade will be available in <strong>%{distance}</strong>, if all your reviewers are done grading your work until then.",
            waiting_for_peers: "Currently your grade is not available. The teaching team is working hard to deliver your grade as soon as possible. You will receive an email notification once your grade is available.",
            waiting_rating: "Waiting for rating",
            where_is_grade: "Where is my grade?",
            written_reviews: {
                reported_by_peer: "Your feedback was reported",
                reported_peer: "You reported your peer's submission"
            },
            you_reported: "You reported your peer for %{reason}. The teaching staff is looking into the issue; you will be notified as soon as the report is closed.<br/>The referral ID for this report is <strong>%{referral}</strong>. Please include this ID in any helpdesk request concerning this report.",
            you_reported_short: "You reported your peer for %{reason}.",
            you_reported_submission: "You reported your peer's submission for %{reason}. The teaching staff is looking into the issue; you will be notified as soon as the report is closed.<br/>The referral ID for this report is <strong>%{referral}</strong>. Please include this ID in any helpdesk request concerning this report.",
            your_feedback: "Your Feedback",
            your_grade: "Your Grade"
        },
        resume: "Back to assessment",
        review: {
            actions: "Actions",
            additional_review: "Additional Review",
            advance: "Continue to next step",
            advance_to_peer_grading: {
                confirm_button: "Continue to the Evaluate your peers phase",
                text: "Once you start the Evaluate Your Peers phase, you can no longer view and grade the training samples.",
                title: "Do you really want to continue to the Evaluate your peers phase now?"
            },
            advance_wait_info: "You will be able to advance to the next step as soon as it unlocks (in %{deadline}).",
            assigned_grade: "Assigned Grade",
            autosave_button: "Save Draft",
            autosave_explanation: "Your draft will be automatically saved. Don\u2019t forget to submit your review.",
            award: "This is an extraordinary submission!",
            award_description: "Check this box if you think that your peer submitted outstanding work.",
            award_disabled: "(Disabled by peer)",
            back_to_overview: "Back to overview",
            check_errors: "You missed some aspects of the review (see end of the page).",
            closed: "Completed",
            continue: "Continue Grading",
            continue_confirm_message: "You cannot evaluate additional peers once you finalize and continue.",
            continue_confirm_title: "Finalize your reviews and continue?",
            deadline_passed: "The deadline to submit your review passed.",
            extend_deadline: "Defer expiration",
            extension_failure: "You can not extend the deadline of this review",
            extension_success: "Successfully extended your deadline",
            grade_first: "Review first peer",
            grade_next: "Review next peer",
            grade_samples: "Grade next sample",
            grading: "Your Grading",
            grading_guideline: "Grading Guideline",
            guideline_text: ["Assess each submission based on the pre-defined criteria (rubrics).", "Provide written feedback that is helpful for your peers: Highlight points of appreciation/ concern and explain why you like the work/ or why not. Provide practical hints and suggestions if possible.", 'Be respectful, stay friendly and factual and keep the <a href="/pages/honor_code">code of honor</a> in mind.'],
            info_text: ["You have <strong>%{days}</strong> left to complete the required <strong>%{required_reviews} reviews (%{review_count} remaining).</strong>", "For each review you have <strong>6 hours</strong> to complete. Click <em>Submit</em> when you are ready. You can still revise and make changes.", "You must complete and submit each review before you can begin the next. Once you have completed all the required reviews, you have the option to complete up to %{required_reviews} additional reviews.", "When you have reviewed and graded all the submissions, <strong>reflect on and revise your reviews</strong>. Please note: you can earn extrapoints if your peers perceive your written feedback as helpful (up to one extra point per review).", "Once you have completed all the required reviews and the next phase is available, the <em>Continue to next step</em> button will be enabled. To proceed, click on <em>Continue to next step</em>. Note: For some courses, you will be able to advance to the next step before the peer evaluation phase has closed. Please make sure that you are satisfied with each review before you continue (You won\u2019t be able to make any changes after you have moved on to the next step)."],
            missing_rubric: "Please grade all rubrics!",
            missing_text: "Please provide written feedback.",
            no_grading_samples_available: "There are currently no submissions available that you could grade",
            no_samples: "There are currently no samples graded.",
            no_time_left: "no time",
            not_editable: "You already submitted this review. Hence, you are no longer able to edit.",
            not_revisable: "You can not revise this review at the moment.",
            open: "Open",
            phase: "Evaluate Your Peers phase",
            process: "Process",
            report: "Report this submission",
            report_failure: "We are sorry, something went wrong. Please contact the helpdesk if the problem persists.",
            report_hint: "If you report a submission, the course team will check your report. Your grading will not be included in your peer\u2019s overall grade and your feedback will not be visible to your peer. Please note that you will then need to evaluate another submission instead of the reported submission.",
            report_submit: "Your report has been filed successfully. Thank you for your effort to improve the community.",
            required_reviews: "You need to evaluate a minimum of %{required_reviews} submissions if you want your own submission to be evaluated and considered for points.",
            review_deleted: "The requested review expired and is no longer available. Please submit reviews in time to avoid this issue.",
            revision: "Revise",
            revision_error: "You can not revise this review.",
            rubrics: "Grading Rubrics",
            server_error: "An error occurred while saving your review. If the problems persists, please contact the helpdesk.",
            status: "Status",
            student_answer: "Student Answer",
            submit_message: "You can still revise this review if the peer evaluation phase has not closed",
            submit_message_title: "Submit this review?",
            submit_revise_info: "Click <em>Submit</em> when you are ready. Otherwise this review will not be considered after the deadline passed. You still have the opportunity to revise and make changes.",
            submit_success: "Successfully submitted your review",
            suspended: "Closed (report filed)",
            team_evaluation: "Team Evaluation",
            time_left: "Time Left",
            unload_message: "Save your changes?",
            view: "View/Edit Sample",
            view_only: "View",
            written_feedback: "Written Feedback",
            written_feedback_hint: "Provide written feedback to your peer! What did you like and what could be improved? If you did not give full points, explain why."
        },
        rubrics: {
            points: "Points"
        },
        saving: "Saving...",
        self_assessment: {
            advance_confirmation: {
                cancel_button: "Go back to the self-evaluation",
                confirm_button: "Continue to the View Results phase",
                text: "If you continue to the View Results phase without submitting your self-evaluation beforehand, you\u2019ll no longer be able to evaluate your own work and you won\u2019t have the chance to earn bonus points for accurate self-evaluation.",
                title: "Are you sure you don\u2019t want to submit a self-evaluation?"
            },
            already_submitted: "You already submitted your draft. Hence, you are no longer eligible to revise your submission!",
            confirm_message: "You will no longer be able to make changes.",
            confirm_title: "Submit your self assessment?",
            grading_rubrics: "Grading Rubrics",
            info_texts: {
                general: "Please reflect on and evaluate your own work after you have reviewed the submissions of your peers.  Self-critical and objective evaluation will be rewarded:  If the score for your self-evaluation score is within 10% of the overall grade you receive from your peers grade, you will receive bonus points."
            },
            phase: "Evaluate Yourself phase",
            skip_button: "Skip step and continue",
            submit_button: "Submit and continue"
        },
        shared: {
            explanation: {
                learn_more: "Tell me more about the"
            },
            rubric: {
                hints: "Additional hints"
            }
        },
        start_assessment: "Start",
        statistics: {
            config_headline: "General Information and Configuration",
            names: {
                submission_create: "Unique submission drafts created",
                submission_submit: "Final submissions"
            },
            submission_stats: "Submission Statistics (%{overall} started, %{content} drafts with files or text, %{submitted} final)"
        },
        step: {
            advancement_unavailable: "You can not advance to the next step at the moment.",
            deadline_passed: "Unfortunately, the deadline (%{deadline}) has already passed and you have not completed this phase. You will not be able to continue with the peer assessment process and your work cannot earn any points.",
            inaccessible: "You can not access this step.",
            locked: "This step is currently locked and will unlock in <strong>%{unlock}</strong>.",
            optional_deadline_passed: 'Unfortunately, the deadline (%{deadline}) has already passed and you have not completed this phase. If this phase was mandatory, you will not be able to continue with the peer assessment process and your work cannot earn any points. If this phase was optional, click "View your results" in the process bar to display your results.'
        },
        submission: {
            add_files: "Add Files",
            additional_attempt: {
                attempt_notice: "You have received an additional attempt to edit and finalize your submission.",
                confirmation_window: {
                    text: "You will be able to save your submission once with updated text and attachment(s).",
                    title: "Edit your submission?"
                },
                edit_submission: "Edit submission",
                info: "<strong>Please note, your edit will not be automatically saved.</strong> You need to click <em>Submit Solution</em> to save your edits. You have only one chance to make changes.",
                not_allowed: "You have used all your attempts to edit your submission.",
                update_error: "An error occurred while updating your submission. If the problem persists, please contact the helpdesk."
            },
            already_submitted: "You already submitted your draft. Hence, you are no longer eligible to revise your submission!",
            attachment_text: "You can submit up to <strong>%{files} file(s)</strong>. If your instructor has enabled the submission of multiple files, please upload them individually. Make sure that all files are properly uploaded before you click <em>Submit Solution</em>. As soon as you click <em>Submit Solution</em> you cannot upload or change files anymore.<br/><strong>Allowed formats: %{formats};  Allowed file size (max.): %{file_size} MB</strong>",
            attachments: "Attachments",
            autosave_notice: "Your submission will periodically be saved, hence you may come back any time to complete your submission as long as you did not submit your draft. After the deadline passed, you will not be able to submit or edit your draft (it will not be submitted automatically!).",
            cancel_all: "Cancel All",
            confirmation_window: {
                confirm_button: "Finalize",
                text: "Please make sure your files are working properly by downloading and opening them before finalizing your submission.",
                title: "Heads Up!"
            },
            content_missing: "Your submission is empty. Please provide content in the text box or upload a file.",
            delete_file: "Delete File",
            delete_file_message: "Delete this file?",
            file_delete_failed: "Deletion failed.",
            info: "Please provide your work and save it as a draft as many times as you wish. As soon as you click <em>Submit Solution</em> you cannot change your work anymore. Be sure to click <em>Submit Solution</em> sometime before the submission deadline; otherwise, your work will not be evaluated and you receive no points. <strong>Your identity will not be shared with your peers. Please keep your submission (text and attachments) free of personal data if you want to keep your privacy.</strong>",
            instructions: "In this step, you have to solve the assignment below. Your submission will be shown to your peers later on for grading.",
            learn_to_grade_popup: "During the 'Learn to grade' phase, instructors pre-evaluate several student submissions in order to provide a grading reference. Students learn to grade based on a few anonymous and randomly assigned submissions from this pre-evaluated pool of submissions.",
            learn_to_grade_popup_title: "Learn to Grade Phase",
            no_file_provided: "No file to upload.",
            no_text: "The student did not provide a written submission.",
            no_text_you: "You did not submit a written submission.",
            no_video: "There was no video uploaded.",
            not_found: "We could not find any submission.",
            save_error: "An error occurred while submitting your assignment. Please contact the helpdesk or try again later.",
            server_error: "An error occurred on our side. Please try again later and contact the helpdesk if the problem persists.",
            start_all: "Upload All",
            start_upload: "Start Upload",
            submit: "Is your submission complete and are you ready to finalize your submission? You will not be allowed to make further changes and you will proceed to the next phase.",
            submit_button: "Submit Solution",
            submit_title: "Confirm Submission",
            success: "Successfully submitted your solution.",
            unauthorized: "You can not delete this file (authorization error).",
            upload_extension_disallowed: "You can't upload this file type.",
            upload_failed: "Upload failed. Please try again or contact the helpdesk if the problem persists.",
            upload_fallback: "Choose your file and click on <em>Start Upload</em> to upload. Please refresh the page to see your upload on the right hand side of this page. If it does not show, your upload did not succeed.",
            upload_limit_reached: "You can not upload any more files",
            your_answer: "Your answer"
        },
        submission_management: {
            additional_attempts: {
                button: "Grant another attempt",
                confirm_message: "The learner will get an additional attempt to edit and submit his/her work.",
                confirm_title: "Grant additional attempt?",
                title: "Additional attempts:"
            },
            allowed_in_gallery: "Allowed in gallery",
            apply: "Apply",
            availalbe_submissions: "Available submissions",
            average: "Median points from peers",
            average_rating: "Experts\u2019 rating",
            average_sort: "Points (grade)",
            close_button: "Close",
            confirm_rating_message: "You can revise your decision later on.",
            confirm_rating_title: "Submit your rating?",
            copy_notice: "Copy this text and paste it anywhere you want where we employ rich text (Pinboard, Text Item, ...). Select the text area and copy the text with CTRL + A then CTRL + C; Macintosh CMD + A then CMD + C.",
            display_student_submission: {
                draft_hint: "  The student has started this phase but did not submit anything (yet).",
                peer_grading_page: "Evaluate your peers",
                results_page: "View your results",
                self_assessment_page: "Evaluate yourself",
                submission_page: "Submit your work",
                title: "Display pages as seen by the students",
                training_page: "Learn to grade"
            },
            filter_reset: "Reset filters",
            final_only: "Show only final submissions",
            final_submissions: "Final Submissions",
            gallery_button_disabled_info: "Please, include at least one submission into the gallery.",
            gallery_entries: "Gallery candidates flagged",
            gallery_include: "This submission has been flagged as a gallery candidate.",
            gallery_only: "Show only submissions included in gallery",
            generate_gallery: "Generate Gallery Template",
            generated_gallery: "Generated Gallery",
            generation_error: "An error occurred while generating the gallery.",
            grant_attempt_failure: "Granting an additional attempt failed.",
            grant_attempt_success: "You successfully granted an additional attempt.",
            include_submission: "Include submission in the gallery",
            metadata: "Review Details and Metadata",
            no_review_matrix: "No reviews available that apply for grading",
            no_submissions: "There are no submissions available at this moment.",
            nominated_submissions: "Total nominations",
            nominations: "Nomination by peers",
            none: "None",
            opted_out_from_gallery: "The participant would not like to have his/her work showcased in the (best-of) gallery.",
            order_by: "Order by:",
            per_page_limit: "Limit submissions per page to:",
            rate: "Rate",
            rating_error: "Your rating could not be saved. Please contact the helpdesk if the problem persists.",
            rating_info: "Click on the stars to rate this submission. <strong>Only click the <em>Include submission in the gallery</em> checkbox if you and your fellow experts finished reviewing submissions.</strong> Also note that you can revise your rating later.",
            rating_success: "Rating saved",
            received_reviews_meta: "Reviews received  <br/> (deadline | grade)",
            refid: "Referral ID",
            regrading_request: {
                button: "Request regrading",
                confirm_message: "The student will be informed by email that regrading has been requested. The regrading request will be listed in the conflict overview for further review by the teaching staff.",
                confirm_title: "Request regrading?",
                label: "Explanation",
                placeholder: "Explain why you are requesting regrading for the student. Your explanation will only be visible to the teaching staff.",
                title: "Request regrading:"
            },
            review_details: "Points breakdown of reviews",
            sort_button: "Sort",
            submission_date: "Created at:",
            submission_headline: "Student Submission",
            submitted: "Submitted",
            team_filter: {
                placeholder: "Teamname",
                submit: "Search"
            },
            teams: "Teams",
            template: {
                desc_placeholder: "*A nice description here, maybe?*",
                explanation: "*A nice explanation why this submission has been selected.*",
                generic_attachment: "[%{description}](%{path})",
                hline: "***",
                image: "![%{description}](%{path}?size=%{size})",
                image_with_link: "[![%{description}](%{image_path}?size=%{size}) %{additional_text}](%{link})",
                link: "[%{description}](%{path})",
                pdf_download: "Download PDF",
                student_headline: "### Student submission from %{name}"
            },
            then: "then:",
            user: "Author",
            user_filter: {
                placeholder: "Name or e-mail",
                submit: "Search"
            },
            view: "View",
            votes: "Vote(s)",
            written_reviews_meta: "Reviews written <br/> (deadline | step | grade)",
            your_rating: "Your Rating",
            your_vote: "You rated %{votes} stars for this submission."
        },
        team: {
            locked: "This peer assessment is not available to you because you are not assigned to a team.",
            text_disabled: "A selected team member submits the work for the entire team. Please upload your work as a file! The entry of additional text is not possible."
        },
        train_samples: {
            back: "Back to overview",
            deadline: "Deadline",
            delete: "Delete",
            delete_review: "Really skip this review? You (or other teaching assistants) will not be able to grade this submission again. Skip reviews only if you think that the given submission does not fit into the training with regard to already graded training reviews.",
            delete_review_title: "Skip or delete this review?",
            eligible_submissions: "There are %{count} submissions eligible as training samples for grading.",
            no_samples: "There are currently no submissions to grade.",
            notice: "Please note: %{count} sample reviews is only the mandatory minimum to open the training phase for students. <strong>20 samples or more</strong> are recommended to ensure an optimal training experience for students.",
            open_error: "An error occurred while opening up the training phase.",
            open_missing: "Open up training (more submitted training reviews required)",
            open_success: "Successfully opened up the training.",
            open_training: "Open up training",
            open_training_message: "After opening up the training, you cannot revise the created training reviews, so make sure everything is correctly graded! Continue opening up the training?",
            open_training_title: "Open up the training?",
            opening_possible: "Training can now be opened up for the students!",
            skip: "Skip (delete draft)",
            status: "Status",
            submit_message: "You can revise this sample later as long as the training has not been opened.",
            submit_message_title: "Submit this sample?",
            train_sample_overview: "Training Samples Overview",
            training_open_error: "You can not do that, because the training is already open.",
            training_opened: "Training is open for students. Hence, you can no longer create, edit or delete training samples.",
            written_feedback: "Note for the course team: Please explain the reasons behind your evaluation so that learners understand what they need to consider when evaluating the work of their peers."
        },
        training: {
            additional_sample: "Additional Sample",
            advance_confirmation: {
                cancel_button: "Go back to training samples",
                confirm_button: "Start the Evaluate Your Peers phase",
                text: "Use the training samples to learn how to grade. Once you start the Evaluate Your Peers phase, you can no longer view and grade the training samples.",
                title: "Have you practiced enough? Do you really want to start the Evaluate Your Peers phase now?"
            },
            confirmation_message: "Submit this training review?",
            confirmation_title: "Confirm submission",
            continue: "Continue to the peer evaluation",
            continue_info: "You can review further training submissions or continue to the <em>Evaluate your peers</em> phase.",
            continue_info_passed: "You can continue to the Evaluate your peers phase.",
            first_sample: "First Sample",
            grading_comparison: "Grading Comparison",
            grading_hints: "(Hints concerning the written feedback are only relevant later on the actual peer grading, but keep them in mind as you read the submissions.)",
            info_text: {
                one: "The goal of the Learn to grade phase is to reduce grading variations between peer evaluators. Your instructors pre-evaluated several student submissions and provided a grading reference. You will learn to grade based on a few anonymous and randomly assigned submissions from this instructor-graded submission pool.",
                three: "Assess each submission based on the pre-defined criteria (rubrics). As this is a training step, you do not need to provide written feedback. After submitting your review, your grading and the instructor grading is displayed. You can understand what the experts are looking for and apply it to your future grading.",
                two: "You have to complete <strong>%{required_reviews} training reviews</strong> in total which will not count towards your peers` results. After the training reviews you will enter the Evaluate your peers phase."
            },
            instructor_feedback: "Instructor\u2019s written feedback",
            match_type: {
                match: "Very good",
                ta_answer: "Instructor",
                your_answer: "You"
            },
            next_sample: "Next Sample",
            no_samples_left: "Training is closed, or there are no training samples left for you to grade.",
            phase: "Learn to Grade phase",
            unavailable: "The instructors are currently grading submissions to provide a grading reference. Once they are available you can complete the training reviews."
        },
        under_construction: {
            header: "Under Construction",
            info: "This assessment is currently under construction. Check back later when the teaching staff finished designing the assessment."
        }
    },
    permissions: {
        add_user: {
            button: "Add user"
        },
        confirmed: "Confirmed",
        confirmed_false: !1,
        confirmed_true: !0,
        details: "Details",
        enrollment_list: 'See the members of this group in the <a href="%{url}">enrollment list</a>.',
        grant_text: "All members of this group are granted the following roles and permissions:",
        group_names: {
            admins: "Course administrators",
            content_editors: "Content editors",
            global: {
                admins: "Platform administrators",
                helpdesk: "Helpdesk staff members",
                reviewers: "Quality assurance staff (reviewers)",
                stakeholders: "Global course stakeholders"
            },
            moderators: "Course moderators",
            pa_content_experts: "Peer assessment content experts",
            pa_jury: "Peer assessment jury",
            partners: "Partner",
            stakeholders: "Course stakeholders",
            students: "Students",
            teachers: "Teachers"
        },
        headline: "Global permission settings",
        remove: "Remove",
        role_names: {
            account: {
                admin: {
                    name: "<b>Account administration:</b> list, create and delete users, change user passwords, masquerade as user"
                },
                permissions: {
                    admin: {
                        name: "<b>Permission administration:</b> list, grant and revoke global permissions (e.g. admin)"
                    }
                },
                support: {
                    name: "<b>Account support:</b> list user, change user passwords, masquerade as user"
                },
                tracer: {
                    name: "<b>User search:</b> find users when filtering submissions, etc."
                }
            },
            certificate: {
                admin: {
                    name: "<b>Certificate administration:</b> add, edit and delete certificate templates, preview certificates"
                }
            },
            collabspace: {
                admin: {
                    name: "<b>Collab space administration:</b> access, manage, close and delete collab spaces, manage collab space members"
                },
                mentor: {
                    name: "<b>Collab space mentoring:</b> access team collab spaces"
                }
            },
            course: {
                admin: {
                    name: "<b>Course administration:</b> create, edit and clone courses, manage teachers"
                },
                channel: {
                    admin: {
                        name: "<b>Channel administration:</b> create, edit and delete channels"
                    }
                },
                content: {
                    controller: {
                        name: "<b>Content controlling:</b> view content item statistics"
                    }
                },
                controller: {
                    name: "<b>Course controlling:</b> access course dashboards and statistics"
                },
                editor: {
                    name: "<b>Course editing:</b> edit course content, view course statistics"
                },
                manager: {
                    global: {
                        name: "<b>Global course management:</b> add and edit teachers (legacy permission from former permission system)"
                    },
                    name: "<b>Course management:</b> edit course settings, manage course content, manage course permissions, view course dashboard and statistics, manage enrollments"
                },
                previewer: {
                    name: "<b>Course preview:</b> view unpublished course content"
                },
                stakeholder: {
                    name: "<b>Course controlling:</b> view course dashboards"
                },
                student: {
                    name: "<b>Student:</b> basic permissions for registered and enrolled users (without special roles)"
                },
                teacher: {
                    name: "<b>Teacher:</b> legacy role for old teacher permissions"
                },
                vouchers: {
                    admin: {
                        name: "<b>Voucher administration:</b> voucher self-service, statistics, inspection of vouchers"
                    }
                }
            },
            file: {
                admin: {
                    name: "<b>File administration:</b> list and delete uploaded files"
                }
            },
            grouping: {
                admin: {
                    name: "<b>User tests administration:</b> create and manage user tests"
                },
                inspector: {
                    name: "<b>User tests:</b> work with user test results"
                }
            },
            helpdesk: {
                pages: {
                    admin: {
                        name: "<b>Pages administration:</b> creation, editing, and deletion of pages"
                    }
                },
                polls: {
                    admin: {
                        name: "<b>Polls administration:</b> creation, editing, deletion, and evaluation of polls"
                    }
                }
            },
            lanalytics: {
                alert: {
                    admin: {
                        name: "<b>QC Alert administration:</b> delete alerts for all users"
                    },
                    inspector: {
                        name: "<b>QC Alerting:</b> list and ignore (own) alerts"
                    }
                },
                report: {
                    inspector: {
                        name: "<b>Reports:</b> create anonymized reportings"
                    }
                },
                rule: {
                    admin: {
                        name: "<b>QC Rule administration:</b> manage rules for QC alerts"
                    }
                }
            },
            lti: {
                admin: {
                    name: "<b>LTI administration:</b> manage LTI providers"
                },
                data_privacy_expert: {
                    name: "<b>LTI data privacy expert</b>: change data privacy options for LTI providers"
                },
                tool: {
                    administrator: {
                        name: "<b>LTI tool administration:</b> manage LTI tools"
                    },
                    instructor: {
                        name: "<b>LTI:</b> use LTI providers"
                    }
                }
            },
            news: {
                announcement: {
                    admin: {
                        name: "<b>News management:</b> create, edit, delete and send announcements"
                    },
                    editor: {
                        name: "<b>News editing:</b> create, edit, delete announcements, send test mails"
                    },
                    previewer: {
                        name: "<b>News preview:</b> view unpublished announcements"
                    }
                },
                page: {
                    admin: {
                        name: "<b>Page administration:</b> create and edit static pages"
                    }
                }
            },
            peerassessment: {
                admin: {
                    name: "<b>Peer assessment administration:</b> view and edit PA settings (evaluation criteria etc.), manage submissions (= view submissions/ reviews/ points/ progress, grant additional attempts, create regrading requests), manage training samples, manage conflicts, rate and mark submissions for best-of gallery, create best of gallery"
                },
                editor: {
                    name: "<b>Peer assessment editing:</b> create and edit peer assessments"
                },
                expert: {
                    name: "<b>Peer assessment expert:</b> rate submissions, manage conflicts, manage training samples"
                },
                expert_support: {
                    name: "<b>Peer assessment expert support:</b> view submissions, rate and mark submissions for best-of gallery"
                },
                manager: {
                    name: "<b>Peer assessment management:</b> view PA settings (evaluation criteria etc.), manage submissions (= view submissions/ reviews/ points/ progress, grant additional attempts, create regrading requests), manage training samples, manage conflicts, rate and mark submissions for best-of gallery"
                },
                support: {
                    name: "<b>Peer assessment support:</b> resolve conflicts, inspect submissions"
                }
            },
            pinboard: {
                instructor: {
                    name: "<b>Pinboard instruction:</b> <i>not yet specified</i>"
                },
                moderator: {
                    name: "<b>Pinboard moderation:</b> edit, delete, block/ unblock, move, close pinboard contributions, or mark them sticky, access pinboard abuse report"
                },
                support: {
                    name: "<b>Pinboard moderation support:</b> block/unblock pinboard contributions, access pinboard abuse report, create sticky posts"
                }
            },
            platform: {
                operator: {
                    name: "<b>Platform operation:</b> access global platform dashboard"
                }
            },
            quiz: {
                admin: {
                    name: "<b>Quiz administration:</b> manage submissions, grant extra attempts"
                },
                controller: {
                    name: "<b>Quiz statistics</b>: view submission statistics"
                },
                inspector: {
                    name: "<b>Quiz inspection</b>: view student submissions"
                },
                proctoring: {
                    admin: {
                        name: "<b>Proctoring administration</b>: inspect proctoring artifacts, manage proctored quizzes"
                    }
                }
            },
            subtitle: {
                editor: {
                    name: "<b>Subtitle editing:</b> upload and delete subtitles for videos"
                }
            },
            video: {
                admin: {
                    name: "<b>Video administration:</b> manage video providers"
                },
                controller: {
                    name: "<b>Video controlling:</b> view video statistics"
                },
                editor: {
                    name: "<b>Video management:</b> add or change videos in content items"
                }
            }
        }
    },
    pinboard: {
        admin_tags: {
            id: "ID",
            name: "Name",
            resource: "R Resource",
            title: "Tags",
            type: "Type"
        },
        ask_question: "Start a new topic",
        breadcrumbs: {
            all: "All discussions",
            collabspace: "Collab Space: %{name}",
            label: "You are here:"
        },
        cancel: "Cancel",
        filters: {
            all_sections: "All sections",
            best_voted_first: "Best voted first",
            latest_question: "Latest questions",
            recent_activity: "Most recent activity",
            search: "Search",
            technical_issues: "Technical Issues"
        },
        general: "All discussions (General)",
        locked_msg: "The discussions for this course are read-only. No new topics or replies can be created.",
        no_results: "Sorry, nothing here yet.",
        no_results_search: "Sorry, no items found for your search",
        pagination: {
            first: "first",
            last: "last",
            next: "next",
            previous: "previous"
        },
        question: {
            accept_hint: "Did this answer help you? Click here to mark it as accepted.",
            ago: "ago",
            answered: "Answered",
            answers: "Replies",
            blocked: "blocked",
            closed: "Closed",
            comments: "comments",
            last_activity: "last activity",
            responses: "responses",
            unanswered: "Unanswered",
            views: "views",
            votes: "votes"
        },
        reporting: {
            admin: {
                created: "Reported at",
                dismiss: "Dismiss",
                empty_msg: "No open abuse reports.",
                headline: "Pinboard Abuse Reports",
                post_types: {
                    answer: "Answer",
                    comment: "Comment",
                    question: "Question"
                },
                question_title: "Discussion Topic",
                reporter: "Reported by",
                type: "Post Type",
                view: "Details"
            },
            answer_blocked: "[This answer was blocked due to inappropriate content]",
            block: "block",
            blocked: "[Blocked]",
            comment_blocked: "[This comment was blocked due to inappropriate content]",
            error: "There was an error reporting this post",
            question_blocked: "[This post was blocked due to inappropriate content]",
            reply_blocked: "Replies and comments are disabled for this topic because it was blocked.",
            report: "report",
            reports: {
                one: "1 report",
                other: "%{count} reports",
                zero: "No reports"
            },
            success: "Your report was received successfully",
            tooltip: "Report inappropriate content",
            unblock: "review"
        },
        search_result_text: 'Your search result for "%{search_string}"',
        search_tag_result_text: {
            one: 'Your search result for tag "%{tags}"',
            other: 'Your search result for tags "%{tags}"'
        },
        sticky: "Sticky",
        submit_question: "Post new topic",
        update_question: "Save changes"
    },
    pinboard_comment: {
        update: "Save changes"
    },
    polls: {
        archive: {
            final_results: "Poll ended on %{date} with %{participants} participants.",
            headline: "Polls Archive",
            intermediate_results: "Intermediate results with %{participants} participants.",
            not_ended: "This poll ends on %{date}. The results will be shown afterwards.",
            not_enough_participants: "Intermediate results will be shown as soon as there is a sufficient number of responses.",
            place_vote: "This poll is still open until %{date}. Please <a href='%{link}'>place your vote</a>!"
        },
        widget: {
            end_at: "Open until %{date}",
            headline: "Polls",
            intermediate_results: "Intermediate results with %{participants} participants.",
            next_poll: "Next poll",
            not_enough_participants: "You can see the results in the <a href='%{link}'>poll archive</a> as soon it has a sufficient number of participants.",
            poll_archive_link: "You can see the results in the <a href='%{link}'>poll archive</a> as soon as the poll ends.",
            recent_results: "Recent poll results",
            thanks: "Thank you for voting!",
            vote: "Vote"
        }
    },
    proctoring: {
        book_certificate: "Book a Certificate",
        calibration_missing_action: "Go to calibration details page",
        calibration_missing_callout: "You must calibrate your image before you take the exam",
        calibration_missing_text: "You will not be able to take the exam until you have started the calibration process.",
        calibration_pending_text: "Your image is currently being calibrated. This process might take a couple of hours. Please return here later to take the exam.",
        calibration_pending_title: "Calibration pending",
        register_with_smowl: "Calibrate your image",
        registration_details: {
            callout_text: "The calibration process can take <strong>up to 48 hours</strong>. During this time the access to graded quizzes and all relevant exercises is blocked.",
            callout_title: "Calibrate your image as soon as possible",
            headline_steps: "Taking a photo for verification",
            step_1: "Make sure you are using a <a href='https://smowl.net/en/faqs-proctoring-smowl/requirements/' target='_blank' rel='noopener'> compatible browser</a>.",
            step_2: 'Click on "Calibrate your image" at the end of this page.',
            step_3: "Take 3 photos of you with your webcam. The second photo will appear on your certificate.",
            step_4: "Confirm the photos or take a new set after rejecting them.",
            steps_introduction: "If you have opted for the Certificate, we need three photos of you for the automatic face recognition. Take the following steps to activate the face recognition function:",
            title: "Calibration for the Certificate",
            verification_lifetime_headline: "Lifetime of Verification",
            verification_lifetime_text: "The calibration is performed per participant, not per course, i.e. you don't need to repeat the whole process again for every course. In following courses, it will be checked if the appearance has changed so much that a new calibration is necessary. If so, you will be asked to do so in the course."
        },
        service_unavailable: "The proctoring service is currently unavailable. Please reload the page. If the problem persists, please contact the helpdesk."
    },
    qcrules: {
        announcement_failed_worker: {
            description: "Triggers alerts when announcement did not succeed.",
            title: "Announcement Failed"
        },
        difficult_selftest_worker: {
            description: "Triggers alerts when selftest might be too difficult.",
            title: "Difficult Selftest"
        },
        headline: "QC Rules",
        initial_announcement_worker: {
            description: "Checks if you let your users know that the course if going to start soon.",
            title: "Pre Course Announcment"
        },
        low_course_communication_worker: {
            description: "Checks if there are regular course announcements send to the learners. Runs on active courses only.",
            title: "Regular Course Communication"
        },
        no_show_worker: {
            description: "Checks the no show rate. Check begin 24 hours after course start.",
            title: "No Show Rate"
        },
        pinboard_activity_worker: {
            description: "Checks the overall activity of the pinboard. Runs for active courses only.",
            title: "Pinboard Activity Check"
        },
        pinboard_closed_for_courses_worker: {
            description: "Checks if pinboard is closed for archived courses.",
            title: "Pinboard Closed Check"
        },
        quiz_performance_worker: {
            description: "Checks for low quiz performance for each quiz in a course. Runs for active courses only.",
            title: "Quiz Performance"
        },
        slides_for_all_course_videos_worker: {
            description: "Checks if there is slide navigation data available for all videos. Will run for all courses.",
            title: "Slide Presence Check"
        },
        too_long_videos_worker: {
            description: "Triggers alerts with different severities if too long videos are found.",
            title: "Long Videos"
        },
        video_events_worker: {
            description: "Triggers alerts when many user interactions on a single spot within a videos are detected.",
            title: "Video Events"
        }
    },
    question: {
        answer_form: {
            answer_question: "Reply",
            submit: "Submit Answer"
        },
        answered: "Answered",
        answers: {
            delete: "delete",
            deleting: "deleting",
            edit: "edit",
            sure: "Are you sure?"
        },
        attachment: {
            download_attachment: "Download attachment"
        },
        comment_form: {
            add_comment: "Add comment",
            create_comment: "Send comment"
        },
        comments: {
            delete: "delete",
            deleting: "deleting",
            edit: "edit",
            sure: "Are you sure?"
        },
        question_detail: {
            add_reply: "Add reply",
            edit: "edit",
            subscribe: "Follow",
            unsubscribe: "Unfollow"
        },
        question_edit_form: {
            submit: "Save changes"
        },
        show: {
            back: "Back to overview",
            close: "Close",
            closed_msg: "The entry was closed and is now read-only. No new answers or comments can be created.",
            confirm_close: "Close this topic?",
            confirm_delete: "Delete this topic?",
            confirm_reopen: "Reopen this topic?",
            destroy: "Delete",
            reopen: "Reopen",
            section_locked_msg: 'The discussions for the section "%{section}" are read-only. No new topics or replies can be created.',
            subscribe: "Follow",
            unsubscribe: "Unfollow"
        },
        unanswered: "Answer now"
    },
    quiz_answers: {
        form: {
            cancel: "Cancel",
            submit: "Submit Answer"
        }
    },
    quiz_questions: {
        edit: {
            markup: "Markup",
            question_type: {
                multiple_answer: "Multi Select",
                multiple_choice: "Single Select"
            },
            submit: "Submit Question",
            type: "Type"
        },
        form: {
            question_type: {
                essay: "Essay",
                free_text: "Free Text",
                multiple_answer: "Multi Select",
                multiple_choice: "Single Select"
            }
        }
    },
    quiz_submission: {
        add_fudge_points: "Add additional points",
        admin_area_title: "Admin Area",
        autosave_warning: "<strong>Warning:</strong> the connection to the %{brand} server is interrupted. Your quiz can not be saved automatically. Please check your internet connection.",
        choose_submission: "Choose submission:",
        confirm_quiz_submission: {
            btn_cancel: "Cancel",
            btn_submit: "Submit answers",
            text: "You have not answered all of the questions. Are you sure you want to submit your answers?"
        },
        fudge_points: "including %{fudge_points} additional points",
        instruction: "Quiz Instruction",
        last_saved: "Last saved:",
        masq_warning: "The submission deadline has already passed. You can only submit as you are masqueraded as the user.",
        max_quiz_points: "max %{max_points} points",
        partials: {
            quiz_answer_solution: {
                correct: "Correct!",
                correct_selected: "Right!",
                correct_unselected: "Right, this statement is not true!",
                thanks: "Thank you!",
                unselected: "Correct Answer",
                wrong: "Your Answer",
                wrong_selected: "This statement is wrong, you shouldn't have selected this!'",
                wrong_unselected: "This statement is right, you should have selected this!"
            },
            quiz_free_text_answer_solution: {
                correct: "Correct!",
                empty: "Empty Answer",
                wrong: "Wrong Answer"
            }
        },
        please_select: "Please select",
        proctoring: {
            data_currently_unavailable: "The proctoring data is still being processed.",
            feature_tooltip: "Violations will be accumulated",
            instrumented_info: "The online proctoring functionality is temporary disabled because you are masqueraded as the user.",
            no_issues: "No issues detected",
            not_passed: "There have been issues during the proctoring for this assignment. A certificate will not be issued. The violations are indicated above.",
            passed_with_issues: "There have been some minor issues during the proctoring for this assignment. The violations are shown above. Please, be aware that these violations will be accumulated throughout the course. In case you cross the threshold for one of the features a certificate will not be issued.",
            sidebar_title: "Online proctoring"
        },
        properties: {
            allowed_attempts: {
                one: "1 attempt",
                other: "%{count} attempts",
                zero: "No attempts"
            },
            bonus: "This is a bonus exercise",
            due_date: "Due on %{date} at %{time}",
            homework: "This is a graded assignment/ exam",
            points: "%{count} points",
            questions: {
                one: "1 question",
                other: "%{count} questions",
                zero: "No questions"
            },
            selftest: "This is an ungraded self-test",
            show_results: "Results available from %{datetime}",
            time_limit: "Max. %{limit} minutes",
            unlimited_attempts: "Unlimited attempts",
            unlimited_time: "No time restriction"
        },
        publish_results_at: "The results will be available here from %{publish_results_date}!",
        question_count: {
            one: "This quiz has one question.",
            other: "This quiz has %{count} questions.",
            zero: "This quiz has no questions."
        },
        question_points: "%{points} Pts",
        questions: "Questions",
        quiz_question_points: "%{points} out of %{max_points} points",
        quiz_question_points_slashed: "%{points} / %{max_points}",
        quiz_results: "Results",
        quiz_sidebar_title: "Quiz Details",
        remaining_attempts: "Remaining attempts: %{remaining_attempts}",
        retake_quiz: "Retake quiz",
        submission_deadline_passed: {
            msg: "You cannot enter any new submissions, because the submission deadline has already passed.",
            title: "Submission deadline has passed"
        },
        submission_points: "%{points} points",
        submission_points_preview: "Your preliminary score is <b>%{points} / %{max_points} points (%{percent}%)</b>",
        submission_points_preview_note: "<i>Please note:</i> You should not discuss the assignment / exam content or score in the forum prior to the submission deadline. Your preliminary score is subject to change.",
        submit: {
            bonus: "Send my answers",
            main: "Send my final answers",
            selftest: "Send my answers",
            survey: "Send feedback"
        },
        submit_fudge_points: "Submit",
        submitted_quiz_at: "You submitted this assignment / exam on %{quiz_submission_time} (%{timezone}).",
        submitted_survey: "Thank you for your participation in this survey. Your feedback is valuable to improve the learning experience!",
        time_remaining: "Time remaining:",
        time_up: "You have reached the time limit for this quiz. Your currently entered solutions will be submitted to the server.",
        times_taken: {
            one: "You have taken this quiz %{count} time.",
            other: "You have taken this quiz %{count} times.",
            zero: "You have not taken this quiz yet."
        },
        total: "Total",
        total_points: "%{total_points} of %{max_points} points achieved",
        unlimited_attempts: "This quiz can be repeated indefinitely!",
        unlimited_time: "No time limit for this quiz, enjoy!",
        your_submissions: "Your submissions: %{submission_count}"
    },
    redirect: {
        manual_redirect: "If this is taking too long or you're not being redirected,<br /><a href='%{url}'>click here to continue</a>.",
        skip_in_future: "Don't show this message again.",
        target_info: "You're being redirected to <b>%{name}</b>, which is outside of %{brand}. This can take up to <b>5 seconds.</b>"
    },
    reports: {
        create_report: "Create report",
        created: "The report was created successfully",
        deleted: "The report was deleted successfully",
        headline: "Reports",
        jobs: {
            close: "Close",
            delete: "Delete",
            download: "Download",
            entity: "Entity",
            error: "Show error details",
            error_details: "Error details",
            expire_date: "Will expire at: %{date}",
            expiry: "Expiry",
            no_error_details: "No error information was logged.",
            restart: "Restart",
            status: "Status",
            type: "Type"
        },
        no_reports_configured: "There are currently no reports enabled for this platform.",
        not_created: "We had a problem creating your report",
        not_deleted: "We had a problem deleting your report",
        not_restarted: "We had a problem restarting your report",
        restarted: "The report was restarted successfully"
    },
    sections: {
        admin: {
            action: "Action",
            delete: "Delete",
            delete_confirm: "This will delete the section.",
            delete_forbidden: "Deletion not possible",
            delete_forbidden_text: "The section still contains elements. Delete them first before the section can be deleted.",
            delete_with_alternatives_confirm: "This will delete the section and all corresponding alternative sections.",
            edit: "Edit",
            move_down: "Move down",
            move_to_bottom: "Move to bottom",
            move_to_top: "Move to top",
            move_up: "Move up"
        },
        alternative: {
            continue: "Continue",
            create: "Add alternative section",
            decision_heading: "Please select the topic you want to work on",
            select: "Select"
        },
        fork: {
            create: "Add fork"
        },
        index: {
            clone_course: {
                button: "Clone course",
                clone_started: "Course cloning started. You can find the cloned course in the <a href='/admin/courses'>courses list</a>.",
                course_code_empty: "The course code for the clone cannot be empty.",
                new_course_not_empty: "The target course for the clone may not have content (sections).",
                placeholder: "Course code of the clone"
            },
            fork: "Fork",
            label: {
                lti_exercise: "Exercise",
                peer_assessment: "Peer Assessment",
                quiz: "Quiz",
                rich_text: "Text",
                video: "Video"
            },
            recalculate_learning_evaluation: "Recalculate now",
            recalculate_text: '<p>The learners\' progresses should be recalculated after:</p>\n- adding a new section with items,<br />\n- removing sections or items,<br />\n- publishing or unpublishing sections or items,<br />\n- changing the "optional" flag for sections or items,<br />\n- or changing the score for graded exercises.<br />\n',
            recalculate_text_rejected: "You have recently triggered the recalculation of learners' progresses. This action is resource-intensive, so it can only be triggered once per hour. Please try later.",
            recalculate_title: "The learner's progresses for this course need to be recalculated"
        },
        item: {
            create: "Add item",
            create_headline: "Create new item in section",
            delete: "Delete item",
            edit_headline: "Edit item",
            edit_subtitles: "Edit subtitles",
            locked_since: "Item was locked %{date}",
            locked_until: "Item will be unlocked in %{date}",
            statistics: "Statistics",
            time_effort: "Time effort: approx. %{time_effort}",
            unpublished: "Item is not published"
        },
        locked_since: "Was locked on %{date}",
        locked_until: "Will be unlocked on %{date}",
        new: "Add section",
        optional_section: " (optional)",
        published: "Is published",
        show_uuids: "Show UUIDs",
        unlocked: "Is unlocked",
        unlocked_since: "Was unlocked on %{date}",
        unpublished: "Is not published"
    },
    shared: {
        records: {
            cert: {
                cert_not_available: "Certificate",
                contact_helpdesk: "Please contact helpdesk",
                download_cert: "Certificate"
            },
            cop: {
                contact_helpdesk: "Please contact helpdesk",
                cop_not_available: "Confirmation of Participation",
                download_cop: "Confirmation of Participation"
            },
            open_badge: {
                open_badge: "Open Badge"
            },
            roa: {
                contact_helpdesk: "Please contact helpdesk",
                download_roa: "Record of Achievement",
                roa_not_available: "Record of Achievement"
            }
        }
    },
    simple_form: {
        error_notification: {
            default_message: "We found some errors. Please review your form input."
        },
        hints: {
            announcement_email: {
                consents: "Only recipients who have given the selected consents will receive the announcement. If none are selected, all recipients will receive the announcement. To stay legally compliant, consult your data protection expert in case of doubt."
            },
            channel: {
                code: "The channel code should only contain lowercase letters and the minus sign ('-').",
                logo_upload_id: "The channel logo will be displayed with a maximum height of 60 px and should have a transparent background. Please style and resize your logo accordingly.",
                mobile_visual_upload_id: "The visual must meet a minimum size of %{width}x%{height} px. Larger images will be resized and cropped to center.",
                public: "Display this channel in the navigation bar and on public channel listings, such as the homepage or in filters on the course list. Note: The channel itself will still be accessible when visited directly, so you can distribute links to the public page or place them elsewhere.",
                stage_visual_upload_id: "The visual must meet a minimum size of %{width}x%{height} px. Larger images will be resized and cropped to center."
            },
            classifier: {
                descriptions: "The description will be displayed when listing the courses for this tag (e.g., on the start page).",
                title: "The tag ID is only used when assigning tags in the course settings or for reports. The ID is not displayed for learners. Allowed characters: a-z, A-Z, 0-9, -, whitespace."
            },
            cluster: {
                id: "The code of a category cannot be modified after it has been created.",
                visible: "Only tags of public categories are used for course filters and as course information."
            },
            course: {
                alternative_teacher_text: "Alternative text if you have a lot of teachers.",
                cop_enabled: "Participants can earn a CoP by viewing / participating in course material.",
                cop_threshold_percentage: "Threshold as percentage for gaining a certificate, between 1 and 100. The global default is %{global_default}.",
                course_code: "Enter short URL safe name. Please use letters, digits and hyphens only. This cannot be changed after course creation.",
                enable_video_download: "Let participants download video or audio versions of video items for offline consumption.",
                external_course_url: "Provide an URL here to link to a course that is offered on another platform. It will appear on course lists and have its own landing page, but most features such as enrollments and course content will be disabled.",
                forum_is_locked: "Set the discussions to read-only. This is usually done after the course has ended.",
                has_collab_space: "Participants can create public or private Collab Spaces (learning rooms) to learn together, collaborate and share files.",
                invite_only: "This disables enrollment self-service. To participate in such a course, learners have to be explicitly enrolled by course staff.",
                learning_goals: "Enter the intended competencies, knowledge, skills, and abilities the learners will gain by successfully attending the course. They will be displayed on the course info page under 'What you'll learn'.",
                learning_goals_only_certificate_page: "Enter the intended competencies, knowledge, skills, and abilities the learners will gain by successfully attending the course. They will be displayed on the certificate verification page.",
                on_demand: "Allows achieving a RoA after regular course runtime (when graded assignments are locked). Learners have to book this feature by redeeming a voucher.",
                pinboard_enabled: "Completely disables the discussions feature for this course. Users won't be able to access any discussions. Discussion forums in Collab Spaces are not affected, if those are enabled.",
                proctored: "Like a RoA, but with webcam-based Proctoring via SMOWL. A picture of the participant will be printed on the certificate PDF. These have to be booked by redeeming a voucher.",
                records_released: "Enable this when the course has ended, to let participants download their certificates.",
                roa_enabled: "Signals successful course participation. Given to those who achieve a certain number of points.",
                roa_threshold_percentage: "Threshold as percentage for gaining a certificate, between 1 and 100. The global default is %{global_default}.",
                show_on_list: "When disabled, the course will not show up on the global course list. It will, however, still be listed on its channel's landing page.",
                show_on_stage: "If you choose to highlight this course on the channel stage, you <i>must provide stage visual and statement</i>.",
                show_syllabus: "Show an overview of all published course content in the learning area.",
                stage_statement: "You can use a h1 headline ('# headline') to apply a statement title and a h3 headline ('### author') to indicate the statement's author. Do not use other markdown.",
                stage_visual_upload_id: "The visual must meet a minimum size of %{width}x%{height} px. Larger images will be resized and cropped to center.",
                target_groups: "Enter the learner groups whom the course is targeted at. They will be displayed on the course info page under 'Who this course is for'.",
                teacher_ids: "Search for teachers to add here, and sort them in the list above. This is only for promotional/display purposes; permissions must be set on the course permissions page.",
                video: "Add course codes here to be considered for the smart video mode filtering.",
                visual_creation: "After creating the course, you may add visuals in the course properties.",
                welcome_mail: "This message will be sent to newly enrolled participants via email. Leave empty if no mail should be sent."
            },
            course_visual: {
                image: "This image will be shown on all course lists. If you don't upload a teaser video, it will also appear on the course details page. For accessibility reasons, the image should not show any text.",
                video_stream_id: "If you select a teaser video, it will be used on the course details page instead of the course image."
            },
            lti_provider: {
                custom_fields: "Specific parameters used in accordance with the LTI standard. Refer to the tool's documentation for more details about the parameters available for use.",
                presentation_mode: "Note: Embedding (frame) will not work with all tools in all browsers. Please make sure that it works with the tool you've selected or use the 'window' option instead.",
                privacy_course_specific: "Privacy cannot be changed at this level. Please contact your platform admin."
            },
            open_badge_template: {
                description: "Overwrites global description",
                name: "Overwrites global name"
            },
            poll: {
                start_at: "Hint: You can only add answer options to a poll if it has not yet started."
            },
            xikolo_course_item: {
                end_date: "Defining an end date will lock this item for all course participants when the date is reached.",
                start_date: "Defining a start date will lock this item for all course participants until the date is reached."
            },
            xikolo_course_section: {
                end_date: "Defining an end date will lock this section for all course participants when the date is reached.",
                start_date: "Defining a start date will lock this section for all course participants until the date is reached."
            },
            xikolo_video_video: {
                subtitles: "Either a WebVTT file containing subtitles or a ZIP archive with multiple WebVTT files. All WebVTT file names must end with a delimiter (either '_' or '-') followed by their two or three-letter language code (e.g., 'en' for English). Example: 'subtitles_en.vtt'"
            }
        },
        in_language: "%{field} (in %{lang})",
        labels: {
            announcement: {
                audience: "Target group",
                content: "Content",
                publish_at: "Publish at",
                show_on_homepage: "Show on homepage",
                subject: "Subject",
                text: "Text",
                title: "Title",
                visual_upload_id: "Visual"
            },
            announcement_email: {
                content: "Content",
                recipients: "Recipients",
                subject: "Subject",
                test: "Send as test email?"
            },
            calendar_event: {
                all_day: "All day event",
                color: "Category",
                description: "Description",
                end_time: "End date (Local)",
                start_time: "Start date (Local)",
                title: "Title"
            },
            certificate_template: {
                certificate_type: "Certificate type",
                dynamic_content: "Dynamic content",
                file: "Template file",
                qrcode_x: "QR code x",
                qrcode_y: "QR code y"
            },
            channel: {
                code: "Code",
                description: "Description",
                info_link_label: "Info link label",
                info_link_url: "Info link URL",
                logo_upload_id: "Logo",
                mobile_visual_upload_id: "Mobile visual",
                name: "Name",
                public: "Public",
                stage_statement: "Stage statement",
                stage_visual_upload_id: "Stage visual",
                video_stream: "Stage video"
            },
            classifier: {
                courses: "Add course",
                descriptions: "Description",
                title: "ID",
                translations: "Title"
            },
            cluster: {
                id: "Code",
                visible: "Public"
            },
            course: {
                abstract: "Abstract",
                alternative_teacher_text: "Alternative teacher text",
                auto_archive: "Auto archive after course end",
                cop_enabled: "Confirmation of Participation",
                cop_threshold_percentage: "Confirmation of Participation threshold",
                course_code: "Course code",
                description: "Description",
                display_start_date: "Displayed start date (UTC)",
                enable_video_download: "Video / audio download",
                end_date: "End date (UTC)",
                enrollment_delta: "Enrollment delta",
                external_course_url: "External course URL",
                external_registration_url: "External registration URL",
                forum_is_locked: "Lock forum",
                groups: "Restricted to groups",
                has_collab_space: "Collab spaces",
                hidden: "Course is hidden",
                invite_only: "Require invitation",
                lang: "Content language",
                middle_of_course: "Course middle for stats (UTC)",
                middle_of_course_is_auto: "Auto-calculate course middle",
                on_demand: "Reactivation",
                pinboard_enabled: "Discussion forum",
                policy_url: "Policy URL",
                proctored: "Certificate (Proctoring)",
                rating_stars: "Rating (average stars)",
                rating_votes: "Rating (number of votes)",
                records_released: "Release records",
                roa_enabled: "Record of Achievement",
                roa_threshold_percentage: "Record of achievement threshold",
                show_on_list: "Show on course list",
                show_syllabus: "Overview",
                stage_statement: "Stage statement",
                stage_visual_upload_id: "Stage visual",
                start_date: "Start date (UTC)",
                teacher_ids: "Teachers",
                title: "Title",
                video_course_codes: "Video Course Codes",
                welcome_mail: "Welcome mail"
            },
            course_visual: {
                image: "Image",
                video_stream_id: "Teaser video"
            },
            login: {
                email: "E-Mail",
                password: "Password"
            },
            lti_provider: {
                consumer_key: "OAuth consumer key",
                custom_fields: "Custom fields",
                description: "Description",
                domain: "Launch URL",
                name: "Name",
                presentation_mode: "Presentation mode",
                shared_secret: "OAuth secret"
            },
            objective: {
                completion_type: "Completion type",
                description: "Description",
                final: "Material complete?",
                position: "Position",
                title: "Title"
            },
            open_badge_template: {
                description: "Description",
                file: "Image file",
                name: "Name"
            },
            page: {
                locale: "Language",
                name: "Name",
                text: "Contents",
                title: "Title"
            },
            teacher: {
                name: "Name",
                picture: "Picture"
            },
            topic: {
                text: "Text",
                title: "Title"
            },
            translation: {
                text: "Text",
                title: "Title"
            },
            user: {
                email: "E-mail address",
                full_name: "Name",
                password: "Password",
                password_confirmation: "Repeat password"
            },
            video_provider: {
                name: "Name"
            },
            video_provider_credentials_kaltura: {
                partner_id: "Partner ID",
                token: "Secret token",
                token_id: "Token ID"
            },
            video_provider_credentials_vimeo: {
                token: "Token"
            },
            video_stream: {
                duration: "Duration in sec",
                hd_url: "HD URL",
                height: "Height",
                hls_url: "HLS URL",
                poster: "Poster-Image URL",
                sd_url: "SD URL",
                title: "Title",
                width: "Width"
            },
            voucher_redemption: {
                code: "Enter your voucher code"
            },
            xikolo_pinboard_answer: {
                attachment: "Attachment"
            },
            xikolo_pinboard_question: {
                attachment: "Attachment",
                move_to: "Move to",
                tag_names: "Tags",
                text: "Text",
                title: "Title"
            }
        },
        no: "No",
        options: {
            certificate_template: {
                certificate_type: {
                    Certificate: "Certificate",
                    ConfirmationOfParticipation: "Confirmation of Participation",
                    RecordOfAchievement: "Record of Achievement"
                }
            },
            lti_provider: {
                presentation_mode: {
                    frame: "frame - Embed in the course area",
                    "pop-up": "pop-up - Open in a pop-up window",
                    window: "window - Open in a new browser tab"
                },
                privacy: {
                    anonymized: "anonymized - Provide no personal data to the LTI provider",
                    pseudonymized: "pseudonymized - Expose no personal data, but allow recognizing a user across exercises using the same provider",
                    unprotected: "unprotected - The LTI provider will receive personal data"
                }
            }
        },
        placeholders: {
            announcement_email: {
                consents: "Select the required consents",
                recipients: "Search by user name, user email, course title, or course code"
            },
            certificate_template: {
                dynamic_content: "SVG to insert dynamic data into the certificate"
            },
            channel: {
                video_stream_id: "Choose a stream"
            },
            course: {
                abstract: "Enter short description",
                description: "Enter full description",
                teacher_ids: "Enter a teacher name"
            },
            course_visual: {
                video_stream_id: "Choose a stream"
            },
            login: {
                email: "E-Mail",
                password: "Password"
            },
            page: {
                text: "Enter contents here..."
            },
            voucher_redemption: {
                code: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
            }
        },
        prompts: {
            announcement: {
                audience: "All users"
            },
            lti_provider: {
                cancel: "Reset to 'anonymized'",
                confirm: "Confirm",
                text: "If the provider is 'unprotected', personal data might be passed to third parties. If the LTI provider is operated by a third party, a separate data processing agreement might be required. Please, discuss this with your data protection officer before enabling.",
                title: "Warning"
            }
        },
        required: {
            mark: "*",
            text: "required"
        },
        upload_file: "Drop files here or click to browse",
        upload_image: "Drop image here or click to browse",
        upload_remove_hint: "The image will be removed on save.",
        upload_single_file: "Drop file here or click to browse",
        yes: "Yes"
    },
    social: {
        allow_detection_via_email: "Allow other users to find me via e-mail",
        allow_detection_via_name: "Allow other users to find me via name"
    },
    social_sharing: {
        facebook: {
            button: "Share",
            icon: {
                name: "facebook",
                style: "brands"
            },
            info: "Share on Facebook"
        },
        linkedin: {
            button: "Share",
            icon: {
                name: "linkedin",
                style: "brands"
            },
            info: "Share on LinkedIn"
        },
        linkedin_add: {
            button: "Add to profile",
            icon: {
                name: "linkedin",
                style: "brands"
            },
            info: "Add to LinkedIn profile"
        },
        mail: {
            button: "Mail",
            icon: {
                name: "envelope",
                style: "solid"
            },
            info: "Send by email",
            share_certificate: {
                body: "Hello ,\n\nI just finished the %{site} course %{title}: %{course_url}.\nYou can check my Open Badge here: %{certificate_url}\n\nBest regards,\n",
                subject: "I successfully completed a course on %{site}"
            },
            share_course: {
                body: "Hello  ,\n\nI enrolled in the %{site} course %{title}: %{url}.\nAll you need to sign up is a valid email address and you can learn from anywhere in the world, at any time.\n\nBest regards,\n",
                subject: "Join me and learn with %{site}"
            }
        },
        twitter: {
            button: "Tweet",
            icon: {
                name: "twitter",
                style: "brands"
            },
            info: "Share on Twitter",
            share_certificate: "I successfully completed the course %{title} on #%{site}!",
            share_course: "I enrolled in the #%{site} course %{title}"
        }
    },
    subtitles: {
        info: "Subtitles (auto-generated)",
        info_short: "Subtitles",
        languages: {
            am: "\u12a0\u121b\u122d\u129b",
            ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
            az: "Az\u0259rbaycan dili",
            bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
            bmb: "Ebembe",
            bn: "\u09ac\u09be\u0982\u09b2\u09be",
            ca: "Catal\xe0",
            cn: "\u4e2d\u6587",
            cs: "\u010ce\u0161tina",
            de: "Deutsch",
            el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
            en: "English",
            eo: "Esperanto",
            es: "Espa\xf1ol",
            fa: "\u0641\u0627\u0631\u0633\u06cc",
            "fa-AF": "\u062f\u0631\u06cc",
            ff: "Fulfulde",
            fi: "Suomi",
            fr: "Fran\xe7ais",
            ha: "Hausa",
            hi: "\u0939\u093f\u0928\u094d\u0926\u0940, \u0939\u093f\u0902\u0926\u0940",
            ht: "Krey\xf2l ayisyen",
            hu: "Magyar",
            hy: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
            id: "Bahasa Indonesia",
            ig: "As\u1ee5s\u1ee5 Igbo",
            it: "Italiano",
            ja: "\u65e5\u672c\u8a9e",
            ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d4\u10dc\u10d0",
            kaa: "Qaraqalpaq",
            kk: "\u041a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456",
            km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
            ko: "\ud55c\uad6d\uc758",
            kr: "Kanuri",
            ksw: "\u1000\u100a\u102e\u1005\u103e\u102e\u1064\u1000\u103b\u102d\u102c\u103a",
            ku: "Kurd\xee",
            ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
            ln: "Ling\xe1la",
            lo: "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7",
            luo: "Dholuo",
            lv: "Latvie\u0161u valoda",
            mai: "\u092e\u0948\u0925\u093f\u0932\u0940",
            mg: "Malagasy",
            mk: "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
            mn: "\u041c\u043e\u043d\u0433\u043e\u043b",
            mr: "\u092e\u0930\u093e\u0920\u0940",
            my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
            ne: "\u0928\u0947\u092a\u093e\u0932\u0940",
            nl: "Nederlands",
            om: "Afaan Oromoo",
            or: "\u0b13\u0b21\u0b3c\u0b3f\u0b06",
            pa: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",
            pcm: "Naij\xe1",
            pl: "Polski",
            ps: "\u067e\u069a\u062a\u0648",
            pt: "Portugu\xeas",
            "pt-BR": "Portugu\xeas brasileiro",
            rhg: "Ru\xe1ingga",
            ro: "Rom\xe2n\u0103",
            ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
            run: "Kirundi",
            shn: "\u107d\u1083\u1087\u101e\u1083\u1087\u1010\u1086\u1038",
            si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
            sn: "chiShona",
            so: "Soomaaliga",
            sq: "Shqip",
            sr: "\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a",
            sw: "Kiswahili",
            ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
            te: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
            tet: "Tetun",
            tg: "\u0442\u043e\u04b7\u0438\u043a\u04e3",
            th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
            tk: "T\xfcrkmen",
            tr: "T\xfcrk\xe7e",
            tum: "ChiTumbuka",
            uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
            ur: "\u0627\u0631\u062f\u0648",
            uz: "O'zbek",
            vi: "Ti\u1ebfng Vi\u1ec7t",
            yao: "chiYao",
            yo: "Yor\xf9b\xe1",
            zh: "\u4e2d\u6587",
            zu: "isiZulu"
        },
        machine_translated: "%{language} (auto-generated)",
        translation_info: "Some subtitles for this video have been auto-generated:"
    },
    support: {
        array: {
            last_word_connector: ", and ",
            two_words_connector: " and ",
            words_connector: ", "
        }
    },
    teachers: {
        promote: "Promote to teacher",
        show: "Show teacher information"
    },
    time: {
        am: "AM",
        formats: {
            abbreviated_month_date: "%b %-d, %Y",
            default: "%a, %d %b %Y %H:%M:%S %z",
            long: "%A, %B %d, %Y %H:%M",
            long_datetime: "%B %d, %Y %H:%M",
            quiz_submission: "%a, %b %d, %Y %H:%M:%S",
            short: "%B %d %Y %H:%M",
            short_datetime: "%B %-d, %Y",
            very_short_datetime: "%b %d %H:%M"
        },
        pm: "PM"
    },
    time_effort: {
        hours: {
            one: "1 hour",
            other: "%{count} hours"
        },
        minutes: {
            one: "1 minute",
            other: "%{count} minutes"
        },
        seconds: "seconds"
    },
    users: {
        list: {
            full_name: "Full name"
        },
        show: {
            action_submissions: "Show submissions",
            actions: "Actions",
            admin_options: "Administrator options",
            back_to_list: "Back to userlist",
            certificate: "Certificate",
            certificates: "Certificates",
            change_password: "Change password",
            completed: "Completed?",
            completed_: "n/a",
            completed_false: !1,
            completed_true: !0,
            confirm_delete: "Are you sure to delete this user?",
            confirm_manual_confirm: "Please a) double check, if the e-mail address of this user is spelled correctly, and b) make sure the user has confirm this e-mail address via a response to the helpdesk.",
            confirmation_of_participation: "Confirmation of Participation",
            confirmed: "Confirmed?",
            course_code: "Course code",
            course_title: "Course title",
            delete: "Delete user",
            enrollments: "Course enrollments",
            manual_confirm: "Confirm manually",
            masquerade: "Masquerade as user",
            password: "Password",
            password_hint: "<strong>Please note:</strong> Changing the password does not affect the linked SSO credentials. If SSO account access is lost, providing a new password will allow an existing account to be linked to the new SSO credentials.",
            points: "Points",
            quantile: "Quantile",
            record_of_achievement: "Record of Achievement",
            user_information: "User information"
        }
    },
    verify: {
        additional_records: {
            headline: "Additional Records",
            info: "The user has also achieved the following record type(s) in this course: <b>%{records}</b>. In this case, we always show the verification result for the most valuable record."
        },
        certificate: "Certificate",
        certificate_data: "Certificate Info",
        certificate_type: "Certificate type",
        confirmation_of_participation: "Confirmation of Participation",
        course_data: "Course Info",
        course_date: "%{start_date} to %{end_date}",
        course_date_from: "since %{start_date}",
        course_learning_goals: "Learning Goals",
        course_runtime: "Course dates",
        course_teachers: "Offered by",
        course_title: "Issued in course",
        date_of_birth: "Date of birth",
        headline: "Certificate Verification",
        headline_show: "Certificate Details",
        identified_by: "Identified by e-mail",
        issued_at: "Issued at",
        issued_for: "Issued for",
        narrative: "%{brand} verifies that the candidate completed the course <a href='%{link}'>%{title}</a> and passed the necessary exercises and exams to earn a course certificate.",
        narrative_meta: "%{brand} verifies that the candidate completed the course %{title} and passed the necessary exercises and exams to earn a course certificate.",
        not_found: "We can't find a certificate matching the provided verification code <i>%{code}</i>. Please check your link.",
        open_badge: {
            headline: "Open Badge",
            linkedin_info_url: "/pages/open_badges",
            share_open_badge: "Share Open Badge"
        },
        points: "%{points} of %{max_points} points (%{percent}%)",
        record_of_achievement: "Record of Achievement",
        result: "Result",
        top: "The result belongs to the <b>top %{top}%</b> of this course.",
        user_data: "User Info",
        valid: "The certificate for the verification code <i>%{code}</i> is valid."
    },
    video_player: {
        dual_stream_mode: "Dual stream",
        error_message: "An error occurred while loading the video player, or it takes a long time to initialize. You can try clearing your browser cache. Please try again later and contact the helpdesk if the problem persists.",
        interactive_transcript_toggle_button: "Transcript",
        single_stream_mode: "Single stream"
    },
    vouchers: {
        create: {
            button: "Generate codes",
            claimant: "User",
            claimant_placeholder: "optional",
            codes: "Generated voucher codes",
            count: "Number of vouchers",
            count_error: "Number must at least be 1",
            course: "Course",
            expiration: "Expiration date",
            expiration_placeholder: "pick date (optional)",
            product: "Product",
            tag: "Tag",
            tag_placeholder: "optional",
            too_many_vouchers_requested: "Too many vouchers requested"
        },
        headline: "Voucher Self-Service",
        nav: {
            create: "Create vouchers",
            query: "Query",
            stats: "Statistics"
        },
        no_products: "No products defined.",
        query: {
            button: "Search",
            claimant: "Claimed by",
            claimed: "Claimed?",
            claimed_at: "Claimed at",
            code: "Voucher Code",
            course: "Claimed for",
            created_at: "Created at",
            expiration_date: "Expiration date",
            placeholder: "Voucher Code",
            restricted_claimant: "Claimable by",
            restricted_course: "Claimable by",
            tag: "Tag",
            text: "Find voucher"
        },
        stats: {
            by_course: "Vouchers by course",
            by_product: "Vouchers by product",
            by_tag: "Vouchers by tag",
            claimed: "Vouchers claimed",
            course_code: "Course Code",
            issued: "Vouchers issued",
            product: "Product",
            tag: "Tag"
        }
    },
    will_paginate: {
        container_aria_label: "Pagination",
        next_label: "Next &#8594;",
        page_aria_label: "Page %{page}",
        page_entries_info: {
            multi_page: "Displaying %{model} %{from} - %{to} of %{count} in total",
            multi_page_html: "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
            single_page: {
                one: "Displaying 1 %{model}",
                other: "Displaying all %{count} %{model}",
                zero: "No %{model} found"
            },
            single_page_html: {
                one: "Displaying <b>1</b> %{model}",
                other: "Displaying <b>all&nbsp;%{count}</b> %{model}",
                zero: "No %{model} found"
            }
        },
        page_gap: "&hellip;",
        previous_label: "&#8592; Previous"
    }
});
