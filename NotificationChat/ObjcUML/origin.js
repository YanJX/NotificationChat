   var dependencies = {
    links:
      [
            { "source" : "AddressBookView", "dest" : "MFMailComposeViewController" },
            { "source" : "AddressBookView", "dest" : "MFMessageComposeViewController" },
            { "source" : "AddressBookView", "dest" : "PFQuery" },
            { "source" : "AddressBookView", "dest" : "PFUser" },
            { "source" : "AddressBookView", "dest" : "ProgressHUD" },
            { "source" : "AFHTTPRequestOperation", "dest" : "AFHTTPResponseSerializer" },
            { "source" : "AFHTTPRequestOperation", "dest" : "AFURLConnectionOperation" },
            { "source" : "AFHTTPRequestOperationManager", "dest" : "AFHTTPRequestOperation" },
            { "source" : "AFHTTPRequestOperationManager", "dest" : "AFHTTPRequestSerializer" },
            { "source" : "AFHTTPRequestOperationManager", "dest" : "AFHTTPResponseSerializer" },
            { "source" : "AFHTTPRequestOperationManager", "dest" : "AFJSONResponseSerializer" },
            { "source" : "AFHTTPRequestOperationManager", "dest" : "AFNetworkReachabilityManager" },
            { "source" : "AFHTTPRequestOperationManager", "dest" : "AFSecurityPolicy" },
            { "source" : "AFHTTPSessionManager", "dest" : "AFHTTPRequestSerializer" },
            { "source" : "AFHTTPSessionManager", "dest" : "AFHTTPResponseSerializer" },
            { "source" : "AFHTTPSessionManager", "dest" : "AFJSONResponseSerializer" },
            { "source" : "AFHTTPSessionManager", "dest" : "AFURLSessionManager" },
            { "source" : "AFNetworkActivityIndicatorManager", "dest" : "AFURLConnectionOperation" },
            { "source" : "AFURLConnectionOperation", "dest" : "AFSecurityPolicy" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFHTTPBodyPart" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFHTTPRequestSerializer" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFJSONRequestSerializer" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFMultipartBodyStream" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFPropertyListRequestSerializer" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFQueryStringPair" },
            { "source" : "AFURLRequestSerialization", "dest" : "AFStreamingMultipartFormData" },
            { "source" : "AFURLResponseSerialization", "dest" : "AFCompoundResponseSerializer" },
            { "source" : "AFURLResponseSerialization", "dest" : "AFHTTPResponseSerializer" },
            { "source" : "AFURLResponseSerialization", "dest" : "AFImageResponseSerializer" },
            { "source" : "AFURLResponseSerialization", "dest" : "AFJSONResponseSerializer" },
            { "source" : "AFURLResponseSerialization", "dest" : "AFPropertyListResponseSerializer" },
            { "source" : "AFURLResponseSerialization", "dest" : "AFXMLParserResponseSerializer" },
            { "source" : "AFURLSessionManager", "dest" : "AFJSONResponseSerializer" },
            { "source" : "AFURLSessionManager", "dest" : "AFNetworkReachabilityManager" },
            { "source" : "AFURLSessionManager", "dest" : "AFSecurityPolicy" },
            { "source" : "AFURLSessionManager", "dest" : "AFURLSessionManagerTaskDelegate" },
            { "source" : "AppDelegate", "dest" : "FBAppCall" },
            { "source" : "AppDelegate", "dest" : "GroupsView" },
            { "source" : "AppDelegate", "dest" : "MessagesView" },
            { "source" : "AppDelegate", "dest" : "NavigationController" },
            { "source" : "AppDelegate", "dest" : "PFFacebookUtils" },
            { "source" : "AppDelegate", "dest" : "PFImageView" },
            { "source" : "AppDelegate", "dest" : "PFInstallation" },
            { "source" : "AppDelegate", "dest" : "PFUser" },
            { "source" : "AppDelegate", "dest" : "Parse" },
            { "source" : "AppDelegate", "dest" : "ProfileView" },
            { "source" : "ChatView", "dest" : "JSQMessage" },
            { "source" : "ChatView", "dest" : "JSQMessagesAvatarImageFactory" },
            { "source" : "ChatView", "dest" : "JSQMessagesBubbleImageFactory" },
            { "source" : "ChatView", "dest" : "JSQMessagesTimestampFormatter" },
            { "source" : "ChatView", "dest" : "JSQMessagesViewController" },
            { "source" : "ChatView", "dest" : "JSQPhotoMediaItem" },
            { "source" : "ChatView", "dest" : "JSQSystemSoundPlayer" },
            { "source" : "ChatView", "dest" : "JSQVideoMediaItem" },
            { "source" : "ChatView", "dest" : "MPMoviePlayerViewController" },
            { "source" : "ChatView", "dest" : "PFFile" },
            { "source" : "ChatView", "dest" : "PFObject" },
            { "source" : "ChatView", "dest" : "PFQuery" },
            { "source" : "ChatView", "dest" : "PFUser" },
            { "source" : "ChatView", "dest" : "ProgressHUD" },
            { "source" : "FacebookFriendsView", "dest" : "FBRequest" },
            { "source" : "FacebookFriendsView", "dest" : "FBSession" },
            { "source" : "FacebookFriendsView", "dest" : "PFQuery" },
            { "source" : "FacebookFriendsView", "dest" : "ProgressHUD" },
            { "source" : "GroupsView", "dest" : "ChatView" },
            { "source" : "GroupsView", "dest" : "PFObject" },
            { "source" : "GroupsView", "dest" : "PFQuery" },
            { "source" : "GroupsView", "dest" : "PFUser" },
            { "source" : "GroupsView", "dest" : "ProgressHUD" },
            { "source" : "JSQLocationMediaItem", "dest" : "JSQMediaItem" },
            { "source" : "JSQLocationMediaItem", "dest" : "JSQMessagesMediaViewBubbleImageMasker" },
            { "source" : "JSQLocationMediaItem", "dest" : "MKMapSnapshotOptions" },
            { "source" : "JSQLocationMediaItem", "dest" : "MKMapSnapshotter" },
            { "source" : "JSQLocationMediaItem", "dest" : "MKPinAnnotationView" },
            { "source" : "JSQMediaItem", "dest" : "JSQMessagesMediaPlaceholderView" },
            { "source" : "JSQMediaItem", "dest" : "JSQMessagesMediaViewBubbleImageMasker" },
            { "source" : "JSQMessagesAvatarImageFactory", "dest" : "JSQMessagesAvatarImage" },
            { "source" : "JSQMessagesBubbleImageFactory", "dest" : "JSQMessagesBubbleImage" },
            { "source" : "JSQMessagesCollectionView", "dest" : "JSQMessagesCollectionViewCellIncoming" },
            { "source" : "JSQMessagesCollectionView", "dest" : "JSQMessagesCollectionViewCellOutgoing" },
            { "source" : "JSQMessagesCollectionView", "dest" : "JSQMessagesLoadEarlierHeaderView" },
            { "source" : "JSQMessagesCollectionView", "dest" : "JSQMessagesTypingIndicatorFooterView" },
            { "source" : "JSQMessagesCollectionViewCell", "dest" : "JSQMessagesCollectionViewCellIncoming" },
            { "source" : "JSQMessagesCollectionViewCell", "dest" : "JSQMessagesCollectionViewCellOutgoing" },
            { "source" : "JSQMessagesCollectionViewCellIncoming", "dest" : "JSQMessagesCollectionViewCell" },
            { "source" : "JSQMessagesCollectionViewCellOutgoing", "dest" : "JSQMessagesCollectionViewCell" },
            { "source" : "JSQMessagesCollectionViewFlowLayout", "dest" : "JSQMessagesCollectionViewFlowLayoutInvalidationContext" },
            { "source" : "JSQMessagesCollectionViewFlowLayout", "dest" : "JSQMessagesCollectionViewLayoutAttributes" },
            { "source" : "JSQMessagesInputToolbar", "dest" : "JSQMessagesToolbarButtonFactory" },
            { "source" : "JSQMessagesInputToolbar", "dest" : "JSQMessagesToolbarContentView" },
            { "source" : "JSQMessagesMediaViewBubbleImageMasker", "dest" : "JSQMessagesBubbleImageFactory" },
            { "source" : "JSQMessagesTypingIndicatorFooterView", "dest" : "JSQMessagesBubbleImageFactory" },
            { "source" : "JSQMessagesViewController", "dest" : "JSQMessagesCollectionViewCellIncoming" },
            { "source" : "JSQMessagesViewController", "dest" : "JSQMessagesCollectionViewCellOutgoing" },
            { "source" : "JSQMessagesViewController", "dest" : "JSQMessagesCollectionViewFlowLayoutInvalidationContext" },
            { "source" : "JSQMessagesViewController", "dest" : "JSQMessagesKeyboardController" },
            { "source" : "JSQPhotoMediaItem", "dest" : "JSQMediaItem" },
            { "source" : "JSQPhotoMediaItem", "dest" : "JSQMessagesMediaViewBubbleImageMasker" },
            { "source" : "JSQSystemSoundPlayer+JSQMessages", "dest" : "JSQMessagesViewController" },
            { "source" : "JSQSystemSoundPlayer+JSQMessages", "dest" : "JSQSystemSoundPlayer" },
            { "source" : "JSQVideoMediaItem", "dest" : "JSQMediaItem" },
            { "source" : "JSQVideoMediaItem", "dest" : "JSQMessagesMediaViewBubbleImageMasker" },
            { "source" : "LoginView", "dest" : "PFUser" },
            { "source" : "LoginView", "dest" : "ProgressHUD" },
            { "source" : "main", "dest" : "AppDelegate" },
            { "source" : "messages", "dest" : "PFObject" },
            { "source" : "messages", "dest" : "PFQuery" },
            { "source" : "messages", "dest" : "PFUser" },
            { "source" : "MessagesView", "dest" : "AddressBookView" },
            { "source" : "MessagesView", "dest" : "ChatView" },
            { "source" : "MessagesView", "dest" : "FacebookFriendsView" },
            { "source" : "MessagesView", "dest" : "NavigationController" },
            { "source" : "MessagesView", "dest" : "PFQuery" },
            { "source" : "MessagesView", "dest" : "PFUser" },
            { "source" : "MessagesView", "dest" : "ProgressHUD" },
            { "source" : "MessagesView", "dest" : "SelectMultipleView" },
            { "source" : "MessagesView", "dest" : "SelectSingleView" },
            { "source" : "ProfileView", "dest" : "PFFile" },
            { "source" : "ProfileView", "dest" : "PFUser" },
            { "source" : "ProfileView", "dest" : "ProgressHUD" },
            { "source" : "pushnotification", "dest" : "PFInstallation" },
            { "source" : "pushnotification", "dest" : "PFPush" },
            { "source" : "pushnotification", "dest" : "PFQuery" },
            { "source" : "pushnotification", "dest" : "PFUser" },
            { "source" : "RegisterView", "dest" : "PFUser" },
            { "source" : "RegisterView", "dest" : "ProgressHUD" },
            { "source" : "SelectMultipleView", "dest" : "PFQuery" },
            { "source" : "SelectMultipleView", "dest" : "PFUser" },
            { "source" : "SelectMultipleView", "dest" : "ProgressHUD" },
            { "source" : "SelectSingleView", "dest" : "PFQuery" },
            { "source" : "SelectSingleView", "dest" : "PFUser" },
            { "source" : "SelectSingleView", "dest" : "ProgressHUD" },
            { "source" : "UIAlertView+AFNetworking", "dest" : "AFURLConnectionOperation" },
            { "source" : "UIButton+AFNetworking", "dest" : "AFHTTPRequestOperation" },
            { "source" : "UIButton+AFNetworking", "dest" : "AFImageResponseSerializer" },
            { "source" : "UIImage+JSQMessages", "dest" : "JSQMessagesViewController" },
            { "source" : "UIImageView+AFNetworking", "dest" : "AFHTTPRequestOperation" },
            { "source" : "UIImageView+AFNetworking", "dest" : "AFImageCache" },
            { "source" : "UIImageView+AFNetworking", "dest" : "AFImageResponseSerializer" },
            { "source" : "UIProgressView+AFNetworking", "dest" : "AFURLConnectionOperation" },
            { "source" : "UIWebView+AFNetworking", "dest" : "AFHTTPRequestOperation" },
            { "source" : "UIWebView+AFNetworking", "dest" : "AFHTTPRequestSerializer" },
            { "source" : "UIWebView+AFNetworking", "dest" : "AFHTTPResponseSerializer" },
            { "source" : "utilities", "dest" : "NavigationController" },
            { "source" : "utilities", "dest" : "WelcomeView" },
            { "source" : "WelcomeView", "dest" : "AFHTTPRequestOperation" },
            { "source" : "WelcomeView", "dest" : "AFImageResponseSerializer" },
            { "source" : "WelcomeView", "dest" : "FBRequest" },
            { "source" : "WelcomeView", "dest" : "LoginView" },
            { "source" : "WelcomeView", "dest" : "PFFacebookUtils" },
            { "source" : "WelcomeView", "dest" : "PFFile" },
            { "source" : "WelcomeView", "dest" : "PFUser" },
            { "source" : "WelcomeView", "dest" : "ProgressHUD" },
            { "source" : "WelcomeView", "dest" : "RegisterView" },
         ]
    }
  ;