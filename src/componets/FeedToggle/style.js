import { StyleSheet, } from 'react-native'

export const styles = StyleSheet.create({
    pillContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    activePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3b82f6',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 14,
        flex: 0.31,
        justifyContent: 'center',
    },
    activePillText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    },
    inactivePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        flex: 0.31,
        justifyContent: 'center',
    },
    inactivePillText: {
        color: '#475569',
        fontWeight: '500',
        fontSize: 14,
    },
    activePillText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    },  
    pillIcon: {
        marginRight: 6,
    },

})
